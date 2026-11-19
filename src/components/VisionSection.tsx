import { ArrowUpRight } from 'lucide-react';
import { VISION_PILLARS, type VisionPillar } from '../data/portfolio';

function PillarMark({ pillarKey }: { pillarKey: VisionPillar['key'] }) {
  if (pillarKey === 'explore') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4 stroke-current"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <line x1="12" y1="3" x2="12" y2="21" />
        <line x1="4.2" y1="7.5" x2="19.8" y2="16.5" />
        <line x1="19.8" y1="7.5" x2="4.2" y2="16.5" />
      </svg>
    );
  }

  if (pillarKey === 'connect') {
    return <ArrowUpRight className="w-4 h-4" aria-hidden="true" />;
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4 fill-current"
      aria-hidden="true"
    >
      <path d="M12 2L14.3 9.7L22 12L14.3 14.3L12 22L9.7 14.3L2 12L9.7 9.7L12 2Z" />
    </svg>
  );
}

export function VisionSection() {
  return (
    <section
      id="vision"
      className="py-24 md:py-32 px-6 md:px-12 bg-[#F7F6F2]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Editorial Manifesto Block */}
        <div className="w-full mb-20 md:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#555555]">
              Service Planning &amp; Strategy
            </span>
            <span aria-hidden="true" className="w-10 h-px bg-black/25" />
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-extrabold tracking-tight leading-[1.08] text-[#141414] mb-10 font-display [text-wrap:balance]">
            FROM INSIGHT TO EXPERIENCES
            <br />
            <span className="font-serif-italic font-normal tracking-normal text-[#141414]">
              THAT MATTER.
            </span>
          </h2>

          <div className="space-y-4 max-w-2xl">
            <p className="font-semibold text-[#141414] text-lg md:text-xl leading-snug">
              필요를 넘어, 마음이 가는 경험을.
            </p>
            <div className="space-y-1.5 text-sm md:text-base text-[#595959] leading-relaxed pt-1">
              <p>서로 다른 생각과 취향, 다양한 선택의 이유를 살핍니다.</p>
              <p>그 안에서 발견한 가능성을 가치 있는 서비스로 연결하겠습니다.</p>
            </div>
          </div>
        </div>

        {/* My Vision 3-Column Editorial Row */}
        <div className="pt-10 border-t border-black/10">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#666666] mb-8">
            My Vision
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10">
            {VISION_PILLARS.map((pillar, index) => (
              <div
                key={pillar.key}
                className={`py-7 md:py-2 flex flex-col items-start text-left ${
                  index === 0
                    ? 'md:pr-8'
                    : index === 1
                    ? 'md:px-8'
                    : 'md:pl-8'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-white border border-black/8 flex items-center justify-center mb-5 text-[#1A1A1A]">
                  <PillarMark pillarKey={pillar.key} />
                </div>
                <h3 className="font-display font-bold text-xs tracking-[0.2em] text-[#141414] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  {pillar.lines[0]}
                  <br />
                  {pillar.lines[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
