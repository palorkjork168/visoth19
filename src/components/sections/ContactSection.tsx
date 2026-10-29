import { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';
import { Mail, Phone, Send, CheckCircle2, Flame, Copy, Check, MessageSquare } from 'lucide-react';

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.935z" />
    </svg>
  );
}

const contactChannels = [
  {
    icon: Mail,
    label: 'EMAIL DIRECT',
    value: 'chousereyvisoth@gmail.com',
    href: 'mailto:chousereyvisoth@gmail.com',
    color: '#00D4FF',
  },
  {
    icon: TelegramIcon,
    label: 'TELEGRAM SECURE',
    value: '+855 87 959 626',
    href: 'https://t.me/+85587959626',
    color: '#00D4FF',
  },
  {
    icon: Phone,
    label: 'VOICE CALL',
    value: '+855 87 959 626',
    href: 'tel:+85587959626',
    color: '#FF8800',
  },
  {
    icon: GithubIcon,
    label: 'GITHUB REPOSITORY',
    value: 'palorkjork168',
    href: 'https://github.com/palorkjork168',
    color: '#FF5500',
  },
  {
    icon: LinkedinIcon,
    label: 'LINKEDIN NETWORK',
    value: 'chou-sereyvisoth',
    href: 'https://www.linkedin.com/in/chou-sereyvisoth-66ba3a3b9/',
    color: '#00BFFF',
  },
];

export function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(label);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Callsign / Name is required.';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Valid frequency (email) required.';
    if (!form.message.trim() || form.message.length < 5) errs.message = 'Transmission content too short.';

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#07070A] pt-28 pb-10 px-5 sm:px-8 md:px-12 overflow-hidden border-t border-white/5"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#FF4500]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-[#00D4FF]/8 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header matching Reference Image */}
        <div className="flex flex-col items-center text-center mb-16">
          <FadeIn delay={0.1} y={15}>
            <div className="flex items-center gap-4 text-[#FF5500] mb-3">
              <span className="w-8 md:w-16 h-px bg-gradient-to-r from-transparent to-[#FF5500]" />
              <span className="font-gamer font-bold text-xs tracking-[0.3em] uppercase">
                UPLINK TRANSMISSION
              </span>
              <span className="w-8 md:w-16 h-px bg-gradient-to-l from-transparent to-[#FF5500]" />
            </div>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <h2 className="font-gamer font-black uppercase tracking-[0.1em] text-[clamp(2.2rem,6vw,4rem)] text-white flex items-center justify-center gap-3">
              <span className="text-white/40 font-light">&mdash;</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#FFB703] to-[#FB5607]">
                SUMMON THE RIDER
              </span>
              <span className="text-white/40 font-light">&mdash;</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.3} y={15}>
            <p className="mt-3 text-white/50 text-xs sm:text-sm font-mono tracking-widest max-w-lg">
              INITIATE SECURE CONTRACT · INQUIRE FOR FULL-STACK &amp; DESIGN ROLES
            </p>
          </FadeIn>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-24">
          
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <FadeIn delay={0.3} y={20}>
              <div className="mb-4">
                <h3 className="font-gamer text-lg font-bold text-white uppercase tracking-wider mb-2">
                  DIRECT FREQUENCIES
                </h3>
                <p className="text-[#94A3B8] text-xs font-chakra leading-relaxed">
                  Available for freelance projects, full-time developer positions, and visual branding challenges. Reach out via your preferred network below.
                </p>
              </div>
            </FadeIn>

            {contactChannels.map((item, idx) => {
              const Icon = item.icon;
              const isCopied = copiedKey === item.label;

              return (
                <FadeIn key={item.label} delay={0.35 + idx * 0.08} y={15}>
                  <div
                    className="group relative flex items-center justify-between p-4 bg-[#0D101D] border border-white/10 hover:border-[#00D4FF]/40 rounded transition-all duration-300"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
                    }}
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3.5 flex-1 min-w-0"
                    >
                      <div
                        className="w-10 h-10 rounded bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
                        style={{ color: item.color }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="block font-gamer text-[10px] tracking-widest text-white/50">
                          {item.label}
                        </span>
                        <span className="block font-mono text-xs text-white group-hover:text-[#00D4FF] truncate font-medium transition-colors">
                          {item.value}
                        </span>
                      </div>
                    </a>

                    <button
                      onClick={() => handleCopy(item.value, item.label)}
                      className="p-2 text-white/40 hover:text-white rounded hover:bg-white/5 transition-colors"
                      title="Copy to clipboard"
                    >
                      {isCopied ? <Check className="w-4 h-4 text-[#00FF66]" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Right Column: Terminal Transmission Form */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.4} y={20}>
              <div
                className="relative bg-[#0C0F1A] border border-[rgba(255,85,0,0.3)] p-6 sm:p-8 rounded-lg shadow-[0_0_35px_rgba(255,85,0,0.15)]"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)',
                }}
              >
                {/* Top Terminal Bar */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF4500]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFB703]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00D4FF]" />
                    <span className="ml-2 font-mono text-[10px] tracking-widest text-white/60">
                      SECURE_TERMINAL // PORT_5174
                    </span>
                  </div>

                  <span className="font-mono text-[9px] text-[#00D4FF] tracking-widest">
                    READY FOR INPUT
                  </span>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#FF4500]/20 border border-[#FF4500] flex items-center justify-center text-[#FF5500] mb-4 shadow-[0_0_20px_#FF4500]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-gamer font-black text-xl text-white uppercase tracking-wider mb-2">
                      TRANSMISSION RECEIVED
                    </h3>
                    <p className="text-[#94A3B8] text-xs font-mono max-w-md mb-6">
                      Your message has reached the terminal. The Spirit of Vengeance will decrypt and respond to your transmission swiftly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: '', email: '', message: '' });
                      }}
                      className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white font-gamer text-xs tracking-widest uppercase rounded"
                    >
                      SEND ANOTHER TRANSMISSION
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Name */}
                    <div>
                      <label className="block font-gamer text-[11px] tracking-widest uppercase text-white/70 mb-2">
                        YOUR CALLSIGN // NAME
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Commander Alex"
                        className="w-full bg-[#070910] border border-white/10 focus:border-[#FF5500] rounded px-4 py-3 text-xs sm:text-sm text-white placeholder-white/20 outline-none transition-colors font-mono"
                      />
                      {errors.name && <p className="text-[10px] text-[#FF4500] mt-1 font-mono">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block font-gamer text-[11px] tracking-widest uppercase text-white/70 mb-2">
                        RETURN FREQUENCY // EMAIL
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full bg-[#070910] border border-white/10 focus:border-[#FF5500] rounded px-4 py-3 text-xs sm:text-sm text-white placeholder-white/20 outline-none transition-colors font-mono"
                      />
                      {errors.email && <p className="text-[10px] text-[#FF4500] mt-1 font-mono">{errors.email}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block font-gamer text-[11px] tracking-widest uppercase text-white/70 mb-2">
                        TRANSMISSION CONTENT // MESSAGE
                      </label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Describe project requirements, tech stack, or inquiry..."
                        className="w-full bg-[#070910] border border-white/10 focus:border-[#FF5500] rounded px-4 py-3 text-xs sm:text-sm text-white placeholder-white/20 outline-none transition-colors font-mono resize-none"
                      />
                      {errors.message && <p className="text-[10px] text-[#FF4500] mt-1 font-mono">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="mt-2 w-full py-4 relative group font-gamer text-xs sm:text-sm font-black tracking-widest uppercase transition-all duration-300"
                      style={{
                        clipPath: 'polygon(10px 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 10px 100%, 0 50%)',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FF5500] via-[#FF2200] to-[#D00000] group-hover:from-[#00D4FF] group-hover:to-[#0077B6] transition-all duration-500 shadow-[0_0_25px_rgba(255,85,0,0.7)]" />
                      <span className="relative z-10 flex items-center justify-center gap-2 text-white group-hover:text-black">
                        <Flame className="w-4 h-4 fill-current" />
                        TRANSMIT SIGNAL
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>

        </div>

        {/* Footer matching bottom of Reference Image ("ALICA", nav links, social icons) */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded bg-[#FF4500]/20 flex items-center justify-center text-[#FF5500]">
              <Flame className="w-4 h-4 fill-current" />
            </div>
            <span className="font-gamer font-black text-sm tracking-wider text-white">
              PALORK<span className="text-[#00D4FF]">.DEV</span>
            </span>
          </div>

          {/* Center Links matching Reference Footer */}
          <div className="flex items-center gap-6 font-gamer text-[11px] tracking-widest uppercase text-white/50">
            <a href="#hero" className="hover:text-[#00D4FF] transition-colors">GAME</a>
            <a href="#about" className="hover:text-[#00D4FF] transition-colors">TOKEN</a>
            <a href="#contact" className="hover:text-[#FF5500] transition-colors">CONTACT</a>
            <a href="#skills" className="hover:text-[#00D4FF] transition-colors">MORE</a>
          </div>

          {/* Right Social Icons matching Reference Footer */}
          <div className="flex items-center gap-4 text-white/50">
            <a
              href="https://github.com/palorkjork168"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FF5500] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/chou-sereyvisoth-66ba3a3b9/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#00D4FF] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://t.me/+85587959626"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#00D4FF] transition-colors"
              aria-label="Telegram"
            >
              <TelegramIcon className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="mt-6 text-center">
          <span className="font-mono text-[10px] text-white/30 tracking-widest uppercase">
            &copy; 2026 CHOU SEREYVISOTH &middot; GHOST RIDER CODING ENGINE &middot; ALL RIGHTS RESERVED
          </span>
        </div>

      </div>
    </section>
  );
}
