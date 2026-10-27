import { cn } from '../../lib/utils';

export function ContactButton({ className }: { className?: string }) {
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-full font-medium text-[#0C0C0C]",
        "bg-gradient-to-r from-[#D7E2EA] to-[#646973]",
        "hover:scale-105 transition-transform duration-300",
        "shadow-[0_0_20px_rgba(215,226,234,0.2)] hover:shadow-[0_0_30px_rgba(215,226,234,0.4)]",
        className
      )}
    >
      Contact Me
    </button>
  );
}
