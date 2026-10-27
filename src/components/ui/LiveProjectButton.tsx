import { cn } from '../../lib/utils';
import { ArrowUpRight } from 'lucide-react';

export function LiveProjectButton({ className }: { className?: string }) {
  return (
    <button
      className={cn(
        "group flex items-center gap-2 px-5 py-2 rounded-full font-medium text-sm",
        "border border-[#D7E2EA]/30 text-[#D7E2EA]",
        "hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-all duration-300",
        className
      )}
    >
      Live Project
      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
}
