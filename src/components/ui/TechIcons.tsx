export interface IconProps {
  className?: string;
  size?: number;
}

export function ReactIcon({ className = 'w-10 h-10', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
      <g stroke="#00D8FF" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function TypeScriptIcon({ className = 'w-10 h-10', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        d="M11.5 8.5H6.5V10.2H8.1V17.5H10V10.2H11.5V8.5ZM13.8 15.2C14.3 15.7 15 16 15.8 16C16.6 16 17.1 15.7 17.1 15.2C17.1 14.7 16.7 14.5 15.7 14.1C14.2 13.5 13.1 12.9 13.1 11.5C13.1 9.9 14.4 8.7 16.2 8.7C17.4 8.7 18.3 9.1 19 9.8L18 11.1C17.4 10.6 16.8 10.3 16.2 10.3C15.5 10.3 15 10.6 15 11.1C15 11.6 15.4 11.8 16.3 12.2C17.9 12.8 19 13.5 19 14.9C19 16.6 17.6 17.7 15.7 17.7C14.3 17.7 13.1 17.1 12.3 16.2L13.8 15.2Z"
        fill="white"
      />
    </svg>
  );
}

export function JavaScriptIcon({ className = 'w-10 h-10', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        d="M7.2 16.8c.4.7.9 1.2 1.8 1.2.9 0 1.5-.4 1.5-1.4v-5.4h1.7v5.5c0 1.9-1.1 2.8-2.9 2.8-1.5 0-2.4-.8-2.9-1.9l.8-.8zm7.3 2.6c-1.5 0-2.6-.8-3.1-2l1.4-.9c.4.7.9 1.2 1.7 1.2.7 0 1.2-.3 1.2-.8 0-.5-.4-.7-1.3-1.1l-.5-.2c-1.4-.6-2.3-1.3-2.3-2.7 0-1.5 1.2-2.6 2.8-2.6 1.2 0 2.1.5 2.7 1.6l-1.3.8c-.3-.6-.7-.9-1.4-.9-.6 0-1 .3-1 .8 0 .5.3.7 1.1 1l.5.2c1.6.7 2.5 1.4 2.5 2.9 0 1.7-1.3 2.6-3 2.6z"
        fill="#000000"
      />
    </svg>
  );
}

export function NextjsIcon({ className = 'w-10 h-10', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 180 180" className={className} fill="none">
      <circle cx="90" cy="90" r="88" fill="#000000" stroke="#FFFFFF" strokeWidth="3" strokeOpacity="0.25" />
      <mask height="180" id="mask0_next" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: 'alpha' }}>
        <circle cx="90" cy="90" fill="black" r="88" />
      </mask>
      <g mask="url(#mask0_next)">
        <path
          d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
          fill="url(#paint0_linear_next)"
        />
        <rect fill="url(#paint1_linear_next)" height="72" width="12" x="115" y="54" />
      </g>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_next"
          x1="109"
          x2="144.5"
          y1="116.5"
          y2="160.5"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_next"
          x1="121"
          x2="120.799"
          y1="54"
          y2="106.875"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function NodejsIcon({ className = 'w-10 h-10', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} fill="none">
      <path
        d="M16 2.5L3.5 9.7V24.3L16 31.5L28.5 24.3V9.7L16 2.5Z"
        fill="#339933"
      />
      <path
        d="M16 4.8L26.3 10.7V22.7L16 28.6L5.7 22.7V10.7L16 4.8Z"
        fill="#43853D"
      />
      <path
        d="M16 11.5C13.5 11.5 11.5 13.5 11.5 16C11.5 18.5 13.5 20.5 16 20.5C18.5 20.5 20.5 18.5 20.5 16C20.5 13.5 18.5 11.5 16 11.5Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function ExpressIcon({ className = 'w-10 h-10', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
      <circle cx="64" cy="64" r="58" fill="#18181B" stroke="#FFFFFF" strokeWidth="4" strokeOpacity="0.2" />
      <text
        x="64"
        y="77"
        fill="#FFFFFF"
        fontSize="38"
        fontWeight="900"
        fontFamily="monospace, system-ui, sans-serif"
        textAnchor="middle"
        letterSpacing="-1"
      >
        ex
      </text>
    </svg>
  );
}

export function NestjsIcon({ className = 'w-10 h-10', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
      <path
        d="M117.4 35.8c-2.4-7.2-7.5-12.8-14.7-16.1l-1.9-.9c-5.9-2.5-12.7-2.7-18.9-.7L43.8 30.5c-6.1 2-11.2 6.3-14.2 12.1-3 5.8-3.4 12.6-1.1 18.7 2.3 6.1 7.1 11 13.2 13.5l3.2 1.3c2.7 1.1 5.7 1.6 8.6 1.6 5.8 0 11.5-2 16-5.8l20.4-17.1c1.3-1.1 3.2-1 4.3.3s1 3.2-.3 4.3L73.5 76.5c-6.7 5.6-15.3 8.7-24.1 8.7-4.4 0-8.9-.8-13.1-2.5l-3.2-1.3c-9.1-3.7-16.3-11.1-19.8-20.3-3.5-9.2-2.9-19.4 1.6-28.1 4.5-8.7 12.2-15.1 21.4-18.1l38.1-12.4c9.3-3 19.5-2.7 28.4 1 10.8 4.9 18.4 13.3 22 24.1 3.6 10.8 2.1 22.4-4.2 31.8L93.7 93.6c-1.3 1.9-3.8 2.4-5.7 1.1s-2.4-3.8-1.1-5.7l26.9-34.2c4.2-6.3 5.2-14.1 2.8-21.3l.8 2.3z"
        fill="#E0234E"
      />
    </svg>
  );
}

export function SpringBootIcon({ className = 'w-10 h-10', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
      <circle cx="64" cy="64" r="58" fill="#6DB33F" />
      <path
        d="M87.8 45.4c-1.8-8.8-9.8-14.6-19.4-14.6-13.1 0-24.2 10.3-25.6 23.8-.5 5.1.5 10.1 3 14.4 3.9 6.8 11 11.3 19.1 12.2 1 .1 2.1.2 3.1.2 11.6 0 21.7-7.4 24.8-18.4 1.2-4.3.9-8.8-.6-13l-4.4-4.6zm-14 26.1c-8.9 2.4-18-2.9-20.4-11.8s2.9-18 11.8-20.4c8.9-2.4 18 2.9 20.4 11.8 2.4 8.9-2.9 18-11.8 20.4z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function LaravelIcon({ className = 'w-10 h-10', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
      <path
        d="M124.6 30.6L68.8 3.4c-3-1.5-6.6-1.5-9.6 0L3.4 30.6c-3.4 1.7-5.4 5.2-5.4 9v68.8c0 3.8 2 7.3 5.4 9l55.8 27.2c1.5.7 3.1 1.1 4.8 1.1 1.7 0 3.3-.4 4.8-1.1l55.8-27.2c3.4-1.7 5.4-5.2 5.4-9V39.6c0-3.8-2-7.3-5.4-9zM64 12.4l45.4 22.1L88 45.2 64 33.5l-24 11.7L18.6 34.5 64 12.4zm-6.4 103.2L12 92.8V48l24 11.7v28.8c0 3.8 2 7.3 5.4 9l16.2 7.9v10.2zm12.8 0v-10.2l16.2-7.9c3.4-1.7 5.4-5.2 5.4-9V59.7L116 48v44.8l-45.6 22.8z"
        fill="#FF2D20"
      />
    </svg>
  );
}

export function NuxtjsIcon({ className = 'w-10 h-10', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
      <path d="M83.2 108H124L80.4 33.2c-1.8-3.1-6.2-3.1-8 0L56.7 60.1l14.9 25.8c1.8 3.1 6.2 3.1 8 0l3.6-6.2 12.3 21.3c1.8 3.1-.4 7-4 7h-8.3z" fill="#00DC82" />
      <path d="M4 108h52.8c4.4 0 7.2-4.8 5-8.6L34.1 51.5c-2.2-3.8-7.7-3.8-9.9 0L4 87.2c-2.2 3.8.5 8.6 4.9 8.6h27.8l-12.7-22 8.3-14.4 21.6 37.4H4c-1.8 0-3 2-2.1 3.5.7 1.2 2 1.7 2.1 1.7z" fill="#00C58E" />
    </svg>
  );
}

export function PostgresIcon({ className = 'w-10 h-10', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
      <circle cx="64" cy="64" r="58" fill="#336791" />
      <path
        d="M66.4 34c-6.8 0-12.8 3.5-16.4 8.8-2.6-.9-5.5-.9-8.1.1-6 2.3-9.8 7.7-10.2 13.9-.2 2.8.5 5.5 1.8 7.9-1.6 3.8-1.5 8.2.4 11.9 2.1 4.2 6.2 7.1 10.9 7.6.5 1.9 1.5 3.7 2.9 5.2 3.5 3.6 8.3 5.5 13.3 5.5 3.4 0 6.8-1 9.8-2.8 3.5 2 7.7 3 11.9 2.9 8.3-.4 15.3-6 17.2-14.2.8-3 .6-6.3-.4-9.2 2.9-4.1 3.7-9.3 2.4-14.2-1.7-5.8-6-10.3-11.7-12.1-1.3-.4-2.7-.6-4.2-.6-.9-4.2-3.6-8-7.6-10.4-3.9-2.2-8.4-3.4-12.7-3.4zm-8.8 19.6c1.9 0 3.4 1.5 3.4 3.4s-1.5 3.4-3.4 3.4-3.4-1.5-3.4-3.4 1.5-3.4 3.4-3.4zm17.6 0c1.9 0 3.4 1.5 3.4 3.4s-1.5 3.4-3.4 3.4-3.4-1.5-3.4-3.4 1.5-3.4 3.4-3.4z"
        fill="#FFFFFF"
      />
      <path
        d="M62 66v15c0 3 2.5 5.5 5.5 5.5s5.5-2.5 5.5-5.5V66"
        stroke="#336791"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="57.6" cy="57" r="2" fill="#336791" />
      <circle cx="75.2" cy="57" r="2" fill="#336791" />
    </svg>
  );
}

export function MongodbIcon({ className = 'w-10 h-10', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
      <path d="M12 1.5C11.5 2 7 7.5 7 13.5C7 18.5 10 21.5 12 22.5C14 21.5 17 18.5 17 13.5C17 7.5 12.5 2 12 1.5Z" fill="#13AA52" />
      <path d="M12 1.5V22.5C14 21.5 17 18.5 17 13.5C17 7.5 12.5 2 12 1.5Z" fill="#119245" />
      <path d="M12 4.5V20.5C11.8 19.5 9 16.5 9 13.5C9 8.5 11.5 5 12 4.5Z" fill="#3FA037" />
    </svg>
  );
}

export function TailwindIcon({ className = 'w-10 h-10', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z"
        fill="#06B6D4"
      />
    </svg>
  );
}

export function JavaIcon({ className = 'w-10 h-10', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
      <path d="M49.6 100.8c-12.7 1.3-23.7.8-23.7.8s10.3 3.4 25.5 2.4c17.5-1.1 27.6-4.5 27.6-4.5s-14.1.3-29.4 1.3z" fill="#5382A1" />
      <path d="M44.7 87.7c-16 1.7-30 1.2-30 1.2s13.3 4.6 32.7 3.3c22.5-1.5 35.5-6.1 35.5-6.1s-18.4.5-38.2 1.6z" fill="#5382A1" />
      <path d="M72.2 69.3c5 5.5-1.3 10.6-1.3 10.6s12.5-6.5 6.6-14.7c-5.9-8.2-13.6-12.3-25.1-17.7-9.4-4.4-4.8-12.2-4.8-12.2s-10.6 6.3-4.5 14.4c7.6 10.1 19.8 10.3 29.1 19.6z" fill="#E76F00" />
      <path d="M102.3 97.4s4.2-3.3-4.6-4.6c-10.6-1.6-17.6 2.1-17.6 2.1s6.6 1.6 11.7 1.6c6.2 0 10.5.9 10.5.9z" fill="#5382A1" />
      <path d="M52.3 35.2c6.2 6.8 15.6 10.9 15.6 18 0 9.8-15.6 13.9-15.6 21.2 0 4.1 3.5 7.6 8.3 10.4 4.8 2.8 10.3 4.6 10.3 4.6s-7.2-2.3-12.1-4.8c-5.7-2.9-9.9-7-9.9-12 0-8.9 15.6-12.8 15.6-21.2 0-5.7-8.9-9.9-12.2-16.2z" fill="#E76F00" />
      <path d="M92.7 114.7c-21.6 5.8-67.6 6.1-85.3 0-5.3-1.8 1.8-4.4 5-5.2 14.4-3.5 45.6-3.8 61.4-.4 6.7 1.4 18.9 5.6 18.9 5.6z" fill="#5382A1" />
    </svg>
  );
}

export function PythonIcon({ className = 'w-10 h-10', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
      <path d="M63.5 12.2c-15.6 0-25 6.9-25 16.3v12h25.7v3.7H25c-14.7 0-25 10.3-25 25 0 14.7 10.3 25 25 25h7.4v-11.2c0-8.8 7.5-15.6 16.3-15.6h25.7c8.1 0 14.7-6.6 14.7-14.7V12.2H63.5zm-9.3 7.8c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z" fill="#3776AB" />
      <path d="M64.5 115.8c15.6 0 25-6.9 25-16.3v-12H63.8v-3.7H103c14.7 0 25-10.3 25-25 0-14.7-10.3-25-25-25h-7.4v11.2c0 8.8-7.5 15.6-16.3 15.6H43.6c-8.1 0-14.7 6.6-14.7 14.7v30.5h35.6zm9.3-7.8c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" fill="#FFD438" />
    </svg>
  );
}

export function LinuxIcon({ className = 'w-10 h-10', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
      <ellipse cx="64" cy="74" rx="42" ry="46" fill="#18181B" />
      <ellipse cx="64" cy="78" rx="28" ry="34" fill="#FFFFFF" />
      <ellipse cx="64" cy="38" rx="28" ry="26" fill="#18181B" />
      <ellipse cx="54" cy="34" rx="5" ry="8" fill="#FFFFFF" />
      <ellipse cx="74" cy="34" rx="5" ry="8" fill="#FFFFFF" />
      <circle cx="55" cy="35" r="3" fill="#000000" />
      <circle cx="73" cy="35" r="3" fill="#000000" />
      <path d="M50 44c0 0 14-4 28 0 0 0-8 12-14 12s-14-12-14-12z" fill="#FFA500" />
      <ellipse cx="38" cy="116" rx="18" ry="8" fill="#FFA500" />
      <ellipse cx="90" cy="116" rx="18" ry="8" fill="#FFA500" />
      <path d="M22 66c-8 12-4 28-2 34 2 6 8 8 10 2 2-6 2-18 6-26-8-2-12-6-14-10z" fill="#18181B" />
      <path d="M106 66c8 12 4 28 2 34-2 6-8 8-10 2-2-6-2-18-6-26 8-2 12-6 14-10z" fill="#18181B" />
    </svg>
  );
}

export function DockerIcon({ className = 'w-10 h-10', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
      <path d="M13.9 8.2h2.2v2.2h-2.2V8.2zm-2.7 0h2.2v2.2h-2.2V8.2zm-2.7 0h2.2v2.2H8.5V8.2zm-2.7 0H8v2.2H5.8V8.2zm2.7-2.7h2.2v2.2H8.5V5.5zm2.7 0h2.2v2.2h-2.2V5.5zm2.7 0h2.2v2.2h-2.2V5.5zm2.7 2.7h2.2v2.2h-2.2V8.2zM8.5 2.8h2.2V5H8.5V2.8z" fill="#0DB7ED" />
      <path d="M23.8 11.5c-.3-.2-1.3-.4-2.4-.1-.4-.6-1-1.1-1.7-1.4l-.5-.2-.3.5c-.4.7-.6 1.6-.5 2.5 0 .2.1.4.1.6-1.1.8-2.6 1.3-4.2 1.3H1.8c-.5 0-.9.4-.9.9 0 3.3 2.1 6.5 5.5 7.6 4.7 1.6 10.1.7 13.9-2.4 2.3-1.9 3.6-4.6 3.7-7.6 0-.3-.1-.6-.2-1.1z" fill="#0DB7ED" />
    </svg>
  );
}

export function GitIcon({ className = 'w-10 h-10', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M21.6 10.9L13.1 2.4C12.5 1.8 11.5 1.8 10.9 2.4L9.1 4.2L11.4 6.5C12 6.3 12.7 6.4 13.2 6.9C13.7 7.4 13.9 8.2 13.6 8.8L15.8 11C16.4 10.7 17.2 10.9 17.7 11.4C18.4 12.1 18.4 13.2 17.7 13.9C17 14.6 15.9 14.6 15.2 13.9C14.7 13.4 14.5 12.6 14.8 12L12.7 9.9V15.2C12.9 15.4 13 15.7 13 16C13 17.1 12.1 18 11 18C9.9 18 9 17.1 9 16C9 15.2 9.5 14.5 10.2 14.2V8.9C9.5 8.6 9 7.9 9 7.1C9 6.7 9.1 6.4 9.3 6.1L7 3.8L2.4 8.4C1.8 9 1.8 10 2.4 10.6L10.9 19.1C11.5 19.7 12.5 19.7 13.1 19.1L21.6 10.9Z"
        fill="#F05032"
      />
    </svg>
  );
}

export function GithubIcon({ className = 'w-10 h-10', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
      <circle cx="12" cy="12" r="11" fill="#18181B" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4C7.58 4 4 7.58 4 12c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0020 12c0-4.42-3.58-8-8-8z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function GitlabIcon({ className = 'w-10 h-10', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
      <path d="M64 121.2L91.4 37H36.6L64 121.2z" fill="#E24329" />
      <path d="M64 121.2L36.6 37H11.5L64 121.2z" fill="#FC6D26" />
      <path d="M11.5 37l-7.3 22.4c-.8 2.5.1 5.2 2.2 6.7L64 121.2 11.5 37z" fill="#FCA326" />
      <path d="M11.5 37h25.1L24 1.3c-.9-2.9-5-2.9-6 0L11.5 37z" fill="#E24329" />
      <path d="M64 121.2L91.4 37h25.1L64 121.2z" fill="#FC6D26" />
      <path d="M116.5 37l7.3 22.4c.8 2.5-.1 5.2-2.2 6.7L64 121.2 116.5 37z" fill="#FCA326" />
      <path d="M116.5 37H91.4l12.6-35.7c.9-2.9 5-2.9 6 0L116.5 37z" fill="#E24329" />
    </svg>
  );
}

export function PostmanIcon({ className = 'w-10 h-10', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
      <circle cx="12" cy="12" r="10" fill="#FF6C37" />
      <path d="M16.5 8.5L8 12.5L12 14.5L13.5 18L16.5 8.5Z" fill="white" />
    </svg>
  );
}

export function AwsIcon({ className = 'w-10 h-10', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
      <path
        d="M37.8 54.8c0-3.3.7-6 2.1-8.1 1.4-2.1 3.6-3.1 6.6-3.1 2.8 0 4.9.9 6.2 2.7V44h8.3v27.2h-7.9v-3.7c-1.4 1.6-3.5 2.7-6.3 2.7-3.1 0-5.4-1.1-6.8-3.2-1.5-2.1-2.2-4.9-2.2-8.4v-3.8zm8.5 5.5c0 1.9.4 3.4 1.1 4.5.7 1.1 1.9 1.6 3.4 1.6 1.6 0 2.8-.5 3.5-1.6.7-1.1 1.1-2.6 1.1-4.5v-3.8c0-1.9-.4-3.4-1.1-4.5-.7-1.1-1.9-1.6-3.5-1.6-1.5 0-2.6.5-3.4 1.6-.7 1.1-1.1 2.6-1.1 4.5v3.8zm22.4-16.3h8.7l4.9 19.3 5.4-19.3h8.6l5.4 19.3 4.9-19.3h8.3l-8.5 27.2h-9.1l-5.3-18.7-5.3 18.7h-9.1L68.7 44zm51 12.7c-1.4-1.1-3.3-1.6-5.7-1.6-2 0-3.5.4-4.5 1.1-1 .7-1.5 1.7-1.5 2.9 0 1.1.4 1.9 1.3 2.5 1 .6 2.4 1.1 4.4 1.5l3.1.6c3.4.7 5.9 1.7 7.4 3.2 1.6 1.4 2.3 3.4 2.3 5.8 0 2.9-1.2 5.2-3.5 7-2.3 1.8-5.6 2.6-9.8 2.6-3.2 0-6.1-.6-8.5-1.9-2.5-1.2-4.2-3-5.2-5.3l7-4c.7 1.5 1.7 2.6 3.1 3.4 1.4.7 3.1 1.1 5 1.1 2.1 0 3.8-.4 4.9-1.2 1.1-.8 1.6-1.8 1.6-3.1 0-1.1-.4-2-1.3-2.6-.9-.7-2.4-1.2-4.4-1.6l-3.1-.6c-3.3-.6-5.7-1.6-7.3-3-1.5-1.4-2.3-3.4-2.3-5.8 0-2.8 1.1-5 3.3-6.6 2.2-1.6 5.2-2.4 9-2.4 3 0 5.6.5 7.8 1.6 2.2 1 3.8 2.6 4.8 4.6l-6.7 3.8zm-82.6 37.1c25.4 16.3 56.4 13.9 76.5 1.8 1.4-.9 3.2.3 2.3 1.8-19.5 15.6-54.8 19.2-80.9-.3-1.5-1.1-.2-2.8 2.1-3.3z"
        fill="#FF9900"
      />
      <path
        d="M115.9 87.8c-2.4-1.3-7.9-1.9-11.8-.7-1 .3-1.2 1.3-.3 1.9 3.4 2.2 8.7 3.3 12.2 4.1 1.2.3 2-.6 1.6-1.8-.3-.9-.9-2.4-1.7-3.5z"
        fill="#FF9900"
      />
    </svg>
  );
}

export function FigmaIcon({ className = 'w-10 h-10', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 38 57" className={className} fill="none">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
    </svg>
  );
}

export function PhotoshopIcon({ className = 'w-10 h-10', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
      <rect width="24" height="24" rx="4" fill="#001E36" />
      <text x="12" y="16" fill="#31A8FF" fontSize="11" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">Ps</text>
    </svg>
  );
}

export function ViteIcon({ className = 'w-10 h-10', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
      <path d="M124.6 20.3L67.4 122.9c-1.4 2.5-5 2.5-6.4 0L3.4 20.3c-1.6-2.8.7-6.2 3.8-5.8l56.8 7.3 56.8-7.3c3.1-.4 5.4 3 3.8 5.8z" fill="url(#vite_grad1)" />
      <path d="M85.7 6.1L45.4 51.6l23.5 2.8-21.4 43.4 47.9-55.5-24.1-3.1 14.4-33.1z" fill="url(#vite_grad2)" />
      <defs>
        <linearGradient id="vite_grad1" x1="16.5" y1="12" x2="114" y2="128" gradientUnits="userSpaceOnUse">
          <stop stopColor="#41D1FF" />
          <stop offset="1" stopColor="#BD34FE" />
        </linearGradient>
        <linearGradient id="vite_grad2" x1="45" y1="6" x2="86" y2="98" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFEA83" />
          <stop offset="0.5" stopColor="#FFDD35" />
          <stop offset="1" stopColor="#FFA800" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function TanStackIcon({ className = 'w-10 h-10', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
      <circle cx="64" cy="64" r="22" fill="#FF4154" />
      <g stroke="#FF4154" strokeWidth="8" strokeLinecap="round">
        <line x1="64" y1="16" x2="64" y2="30" />
        <line x1="64" y1="98" x2="64" y2="112" />
        <line x1="16" y1="64" x2="30" y2="64" />
        <line x1="98" y1="64" x2="112" y2="64" />
        <line x1="30" y1="30" x2="40" y2="40" />
        <line x1="88" y1="88" x2="98" y2="98" />
        <line x1="30" y1="98" x2="40" y2="88" />
        <line x1="88" y1="40" x2="98" y2="30" />
      </g>
      <circle cx="64" cy="64" r="10" fill="#FFD23F" />
    </svg>
  );
}

export function ZodIcon({ className = 'w-10 h-10', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
      <rect width="128" height="128" rx="28" fill="#3068B7" />
      <path
        d="M32 38h64L44 90h52"
        stroke="#FFFFFF"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShadcnIcon({ className = 'w-10 h-10', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" className={className} fill="none">
      <circle cx="128" cy="128" r="120" fill="#000000" stroke="#FFFFFF" strokeWidth="6" strokeOpacity="0.25" />
      <line x1="208" y1="128" x2="128" y2="208" stroke="#FFFFFF" strokeWidth="24" strokeLinecap="round" />
      <line x1="192" y1="40" x2="40" y2="192" stroke="#FFFFFF" strokeWidth="24" strokeLinecap="round" />
    </svg>
  );
}

export function SequelizeIcon({ className = 'w-10 h-10', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
      <path d="M64 8l50 29v58l-50 29-50-29V37L64 8z" fill="#295E8A" />
      <path d="M64 22l38 22v44l-38 22-38-22V44l38-22z" fill="#03AFEF" />
      <path d="M64 36l26 15v30l-26 15-26-15V51l26-15z" fill="#EE8422" />
      <path d="M64 50l14 8v16l-14 8-14-8V58l14-8z" fill="#FFFFFF" />
    </svg>
  );
}

export function IllustratorIcon({ className = 'w-10 h-10', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
      <rect width="128" height="128" rx="28" fill="#330000" />
      <text
        x="64"
        y="84"
        fill="#FF9A00"
        fontSize="54"
        fontWeight="bold"
        fontFamily="sans-serif"
        textAnchor="middle"
      >
        Ai
      </text>
    </svg>
  );
}

export function CloudinaryIcon({ className = 'w-10 h-10', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
      <circle cx="64" cy="64" r="58" fill="#3448C5" />
      <path
        d="M64 36c-13.8 0-25.2 9.8-27.5 22.8C31 60 26.5 65.5 26.5 72.2c0 8.2 6.6 14.8 14.8 14.8h45.4c9.1 0 16.5-7.4 16.5-16.5 0-7.8-5.4-14.3-12.7-16-1.5-10.4-10.5-18.5-21.5-18.5h-5z"
        fill="#FFFFFF"
      />
      <circle cx="58" cy="62" r="5" fill="#3448C5" />
    </svg>
  );
}

export function NpmIcon({ className = 'w-10 h-10', size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className} fill="none">
      <rect width="128" height="128" rx="20" fill="#CB3837" />
      <path d="M24 24h80v80H77.3V50.7H50.7V104H24V24z" fill="#FFFFFF" />
    </svg>
  );
}
