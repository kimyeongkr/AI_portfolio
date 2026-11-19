import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
}

export function Hero({ onExplore }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center text-[#1A1A1A] px-6 overflow-hidden hero-editorial-bg"
    >
      {/* Subtle editorial paper texture */}
      <div aria-hidden="true" className="absolute inset-0 editorial-grain pointer-events-none" />

      {/* Central Typographic Composition */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto pt-12">
        <div
          aria-hidden="true"
          className="w-11 h-11 rounded-full bg-black/[0.06] border border-black/10 flex items-center justify-center text-[#1A1A1A] mb-6"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 stroke-current"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="12" y1="3" x2="12" y2="21" />
            <line x1="4.2" y1="7.5" x2="19.8" y2="16.5" />
            <line x1="19.8" y1="7.5" x2="4.2" y2="16.5" />
          </svg>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[0.22em] font-display text-[#1A1A1A] mb-4 [text-wrap:balance]">
          KIM YEONG
        </h1>

        <p className="text-xs sm:text-sm font-semibold tracking-[0.28em] text-[#3F3A36]">
          SERVICE PLANNING PORTFOLIO 2026
        </p>
      </div>

      {/* Scroll to explore control */}
      <button
        type="button"
        onClick={onExplore}
        className="group absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2.5 px-4 py-2 text-[#3F3A36] hover:text-[#1A1A1A] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A1A1A]"
      >
        <span
          aria-hidden="true"
          className="w-px h-8 bg-black/30 group-hover:bg-black/70 transition-colors"
        />
        <span className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.22em] font-medium whitespace-nowrap">
          SCROLL TO EXPLORE
          <ArrowDown className="w-3 h-3 transition-transform duration-200 group-hover:translate-y-0.5" />
        </span>
      </button>
    </section>
  );
}
