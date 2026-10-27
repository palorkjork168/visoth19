import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uPhoto;
  uniform sampler2D uAlt;
  uniform sampler2D uTrail;
  uniform float uProgress;
  uniform float uTime;
  uniform vec3 uGlow;
  uniform vec2 uAspect; // x = canvasAspect, y = imageAspect
  varying vec2 vUv;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
  }
  float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.0; a *= 0.5; }
    return v;
  }

  // Exact aspect-ratio containment anchoring to the bottom (vUv.y = 0.0 is bottom in WebGL)
  vec2 getContainUv(vec2 uv) {
    float cAspect = uAspect.x;
    float iAspect = uAspect.y;
    vec2 st = uv;
    if (cAspect > iAspect) {
      // Canvas is wider than image: scale horizontally and center
      float scale = iAspect / cAspect;
      st.x = (st.x - 0.5) / scale + 0.5;
    } else {
      // Canvas is taller than image: scale vertically and anchor to bottom
      float scale = cAspect / iAspect;
      st.y = st.y / scale;
    }
    return st;
  }

  void main() {
    vec2 st = getContainUv(vUv);

    // If outside the natural image boundary, discard to prevent any distortion or stretching
    if (st.x < 0.0 || st.x > 1.0 || st.y < 0.0 || st.y > 1.0) {
      gl_FragColor = vec4(0.0);
      return;
    }

    vec4 photo = texture2D(uPhoto, st);
    vec4 alt = texture2D(uAlt, st);

    // Dynamic liquid undulating wave animation using uTime
    vec2 waveOffset = vec2(
      sin(st.y * 9.0 + uTime * 2.2) * 0.035 + cos(st.x * 7.0 + uTime * 1.8) * 0.025,
      cos(st.x * 8.0 + uTime * 2.0) * 0.035 + sin(st.y * 6.0 + uTime * 1.5) * 0.025
    );

    // burn front sweeping through organic animated noise
    float n = fbm(st * vec2(4.2, 4.0) + waveOffset + 1.7);
    float edge = 0.07;
    float threshold = uProgress * (1.0 + edge * 2.0) - edge;
    float revealed = 1.0 - smoothstep(threshold - edge * 0.35, threshold + edge * 0.35, n);
    float burnGlow = 1.0 - smoothstep(0.0, edge, abs(n - threshold));

    // cursor liquid trail with living animated wavy noise
    float trailSample = texture2D(uTrail, st).a;
    float trail = trailSample + (n - 0.5) * 0.42;
    float trailMask = smoothstep(0.20, 0.50, trail);
    
    // intense golden fiery liquid rim glow
    float rimShape = 4.0 * trailMask * (1.0 - trailMask);
    float trailGlow = pow(rimShape, 2.5) * 1.8;

    // smooth liquid blend between normal photo and alt aura
    float coverage = mix(photo.a, alt.a, revealed);
    float showPhoto = mix(revealed, 1.0 - revealed, trailMask * coverage);
    vec4 color = mix(vec4(alt.rgb * alt.a, alt.a), vec4(photo.rgb * photo.a, photo.a), showPhoto);
    float glow = clamp(burnGlow * 1.2 + trailGlow, 0.0, 1.0) * max(photo.a, alt.a);
    
    color.rgb += uGlow * glow;
    color.a = max(color.a, glow);
    gl_FragColor = color;
  }
`;

function hexToRgb(hex: string): [number, number, number] {
  const t = parseInt(hex.replace('#', ''), 16);
  return [((t >> 16) & 255) / 255, ((t >> 8) & 255) / 255, (t & 255) / 255];
}

interface LiquidPortraitRevealProps {
  photoSrc: string;
  altSrc: string;
  isAltActive?: boolean;
  glowColor?: string;
  className?: string;
}

export function LiquidPortraitReveal({
  photoSrc,
  altSrc,
  isAltActive = false,
  glowColor = '#FF9900',
  className = '',
}: LiquidPortraitRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const controllerRef = useRef<{ show: (mode: 'photo' | 'alt') => void; destroy: () => void } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let disposed = false;
    let animId = 0;

    const loadImg = (src: string): Promise<HTMLImageElement> =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });

    Promise.all([loadImg(photoSrc), loadImg(altSrc)]).then(([photoImg, altImg]) => {
      if (disposed || !canvas) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 3);
      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
      renderer.setPixelRatio(dpr);
      renderer.setClearColor(0, 0);

      const maxAniso = renderer.capabilities.getMaxAnisotropy();

      const photoTex = new THREE.Texture(photoImg);
      photoTex.generateMipmaps = false;
      photoTex.minFilter = THREE.LinearFilter;
      photoTex.magFilter = THREE.LinearFilter;
      photoTex.anisotropy = maxAniso;
      photoTex.needsUpdate = true;

      const altTex = new THREE.Texture(altImg);
      altTex.generateMipmaps = false;
      altTex.minFilter = THREE.LinearFilter;
      altTex.magFilter = THREE.LinearFilter;
      altTex.anisotropy = maxAniso;
      altTex.needsUpdate = true;

      const trailCanvas = document.createElement('canvas');
      trailCanvas.width = 400;
      trailCanvas.height = Math.round((400 * photoImg.naturalHeight) / photoImg.naturalWidth);
      const trailCtx = trailCanvas.getContext('2d');
      if (!trailCtx) return;

      const trailTex = new THREE.Texture(trailCanvas);
      trailTex.minFilter = THREE.LinearFilter;
      trailTex.generateMipmaps = false;

      const imgAspect = photoImg.naturalWidth / photoImg.naturalHeight;
      const glowRgb = hexToRgb(glowColor);

      const uniforms = {
        uPhoto: { value: photoTex },
        uAlt: { value: altTex },
        uTrail: { value: trailTex },
        uProgress: { value: isAltActive ? 0.0 : 1.0 },
        uTime: { value: 0.0 },
        uGlow: { value: new THREE.Vector3(...glowRgb) },
        uAspect: { value: new THREE.Vector2(1.0, imgAspect) },
      };

      const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        transparent: true,
        premultipliedAlpha: true,
        depthTest: false,
        uniforms,
      });

      const geometry = new THREE.PlaneGeometry(2, 2);
      const scene = new THREE.Scene();
      scene.add(new THREE.Mesh(geometry, material));
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      let rect = canvas.getBoundingClientRect();
      const resize = () => {
        rect = canvas.getBoundingClientRect();
        const { clientWidth: w, clientHeight: h } = canvas;
        if (!w || !h) return;
        renderer.setSize(w, h, false);
        uniforms.uAspect.value.set(w / h, imgAspect);
        kick();
      };

      let currPos: { x: number; y: number } | null = null;
      let prevPos: { x: number; y: number } | null = null;
      let remainingFrames = 0;

      const handlePointer = (clientX: number, clientY: number) => {
        rect = canvas.getBoundingClientRect();
        const rawNx = (clientX - rect.left) / rect.width;
        const rawNy = (clientY - rect.top) / rect.height;

        // Map pointer position through the aspect contain transform so trail aligns with pixels
        const canvasAspect = rect.width / rect.height;
        let nx = rawNx;
        let ny = rawNy;

        if (canvasAspect > imgAspect) {
          const scale = imgAspect / canvasAspect;
          nx = (rawNx - 0.5) / scale + 0.5;
        } else {
          const scale = canvasAspect / imgAspect;
          ny = (rawNy - (1 - scale)) / scale;
        }

        if (nx < -0.1 || nx > 1.1 || ny < -0.1 || ny > 1.1) {
          prevPos = null;
          return;
        }
        currPos = { x: Math.max(0, Math.min(1, nx)), y: Math.max(0, Math.min(1, ny)) };
        kick();
      };

      const onPointerMove = (e: PointerEvent) => handlePointer(e.clientX, e.clientY);
      const onTouchMove = (e: TouchEvent) => {
        if (e.touches.length > 0) handlePointer(e.touches[0].clientX, e.touches[0].clientY);
      };

      const renderTrail = () => {
        const tw = trailCanvas.width;
        const th = trailCanvas.height;
        trailCtx.globalCompositeOperation = 'destination-out';
        trailCtx.fillStyle = 'rgba(0,0,0,0.058)';
        trailCtx.fillRect(0, 0, tw, th);

        if (!currPos) return;

        trailCtx.globalCompositeOperation = 'lighter';
        const radius = (75 / rect.width) * tw;
        const start = prevPos || currPos;
        const dist = Math.hypot((currPos.x - start.x) * tw, (currPos.y - start.y) * th);
        const steps = Math.max(1, Math.ceil(dist / (radius * 0.35)));

        for (let s = 1; s <= steps; s++) {
          const x = (start.x + ((currPos.x - start.x) * s) / steps) * tw;
          const y = (start.y + ((currPos.y - start.y) * s) / steps) * th;
          const grad = trailCtx.createRadialGradient(x, y, 0, x, y, radius);
          grad.addColorStop(0, 'rgba(255,255,255,0.72)');
          grad.addColorStop(0.55, 'rgba(255,255,255,0.38)');
          grad.addColorStop(0.85, 'rgba(255,255,255,0.10)');
          grad.addColorStop(1, 'rgba(255,255,255,0)');
          trailCtx.fillStyle = grad;
          trailCtx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
        }

        prevPos = currPos;
        currPos = null;
      };

      let isRunning = false;
      let lastTime = performance.now();
      let startTime = performance.now();
      let targetProgress = isAltActive ? 0.0 : 1.0;
      let transitionSpeed = 1.3;

      const loop = (now: number) => {
        const dt = Math.min((now - lastTime) / 1000, 0.05);
        lastTime = now;

        uniforms.uTime.value = (now - startTime) / 1000;

        const p = uniforms.uProgress.value;
        const isProgressChanging = Math.abs(p - targetProgress) > 0.001;
        if (isProgressChanging) {
          const step = dt / transitionSpeed;
          uniforms.uProgress.value =
            targetProgress > p
              ? Math.min(targetProgress, p + step)
              : Math.max(targetProgress, p - step);
        }

        const hadMouse = currPos !== null;
        renderTrail();
        trailTex.needsUpdate = true;
        renderer.render(scene, camera);

        remainingFrames = hadMouse ? 160 : remainingFrames - 1;

        if (isProgressChanging || remainingFrames > 0) {
          animId = requestAnimationFrame(loop);
        } else {
          isRunning = false;
          prevPos = null;
        }
      };

      function kick() {
        if (!isRunning && !document.hidden) {
          isRunning = true;
          lastTime = performance.now();
          animId = requestAnimationFrame(loop);
        }
      }

      window.addEventListener('pointermove', onPointerMove, { passive: true });
      window.addEventListener('touchmove', onTouchMove, { passive: true });
      const ro = new ResizeObserver(resize);
      ro.observe(canvas);
      resize();

      controllerRef.current = {
        show(mode: 'photo' | 'alt') {
          targetProgress = mode === 'alt' ? 0.0 : 1.0;
          transitionSpeed = 1.1;
          kick();
        },
        destroy() {
          cancelAnimationFrame(animId);
          window.removeEventListener('pointermove', onPointerMove);
          window.removeEventListener('touchmove', onTouchMove);
          ro.disconnect();
          geometry.dispose();
          material.dispose();
          photoTex.dispose();
          altTex.dispose();
          trailTex.dispose();
          renderer.dispose();
        },
      };
    });

    return () => {
      disposed = true;
      if (controllerRef.current) {
        controllerRef.current.destroy();
        controllerRef.current = null;
      }
    };
  }, [photoSrc, altSrc, glowColor]);

  useEffect(() => {
    if (controllerRef.current) {
      controllerRef.current.show(isAltActive ? 'alt' : 'photo');
    }
  }, [isAltActive]);

  return (
    <div ref={containerRef} className={`relative select-none ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain object-bottom pointer-events-auto"
        style={{ display: 'block' }}
      />
    </div>
  );
}
