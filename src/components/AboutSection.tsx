import { useState } from 'react';
import {
  EDUCATIONS,
  EXPERIENCES,
  PROFILE_IMAGE,
  SKILL_GROUPS,
  SKILL_SUMMARY,
} from '../data/portfolio';

export function AboutSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 md:px-12 pb-28 md:pb-36 bg-[#F7F6F2] border-t border-black/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Intro Split: Editorial Copy + 3:4 Portrait */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center mb-16">
          <div className="md:col-span-8 flex flex-col justify-center">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#666666] block mb-3">
              Get To Know Me
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#141414] font-display leading-[1.18] mb-6 [text-wrap:balance]">
              디자인과 서비스 운영을 거쳐,
              <br />
              기획과 구현으로.
            </h2>
            <p className="text-sm md:text-base text-[#525252] leading-relaxed max-w-xl font-normal">
              디자인과 전시·콘텐츠 제작, 쇼핑 서비스 운영을 경험했습니다.
              <br />
              이후 AI·데이터 기반 서비스 프로젝트를 수행하며 문제를 정의하고
              아이디어를 실제 기능으로 연결하는 경험을 쌓았습니다.
            </p>
          </div>

          <div className="md:col-span-4 flex justify-start md:justify-end">
            <figure className="w-56 sm:w-64">
              <div className="aspect-[3/4] rounded-md overflow-hidden bg-[#E6E4DD] border border-black/10">
                {imageError ? (
                  <div className="w-full h-full flex flex-col items-center justify-center text-[#666666] p-6 text-center">
                    <span className="font-display font-bold text-base text-[#1A1A1A] tracking-wider">
                      KIM YEONG
                    </span>
                    <span className="text-xs mt-1 text-[#666666]">
                      Service Planner
                    </span>
                  </div>
                ) : (
                  <img
                    src={PROFILE_IMAGE}
                    alt="서비스 흐름을 스케치하는 김영(Kim Yeong) 에디토리얼 프로필 이미지"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-center"
                  />
                )}
              </div>
              <figcaption className="mt-2.5 flex items-center justify-between text-[11px] font-medium text-[#666666]">
                <span>Kim Yeong</span>
                <span>Service Planner · Seoul</span>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Experience & Education 2-Column Hairline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-black/10 pt-10 mb-12">
          <div>
            <h3 className="text-xs font-bold tracking-[0.16em] text-[#141414] mb-6">
              RELEVANT EXPERIENCE
            </h3>
            <div className="space-y-5">
              {EXPERIENCES.map((item) => (
                <div key={item.heading}>
                  <div className="font-bold text-[#141414] text-sm mb-1">
                    {item.heading}
                  </div>
                  <p className="text-xs sm:text-[13px] text-[#595959] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-[0.16em] text-[#141414] mb-6">
              EDUCATION &amp; TRAINING
            </h3>
            <div className="space-y-5">
              {EDUCATIONS.map((item) => (
                <div key={item.heading}>
                  <div className="font-bold text-[#141414] text-sm mb-1">
                    {item.heading}
                  </div>
                  <p className="text-xs sm:text-[13px] text-[#595959] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills & Tools — Clean Unboxed Editorial Grid (Zero-Pill) */}
        <div className="border-t border-black/10 pt-10">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-6">
            <h3 className="text-xs font-bold tracking-[0.16em] text-[#141414]">
              SKILLS &amp; TOOLS
            </h3>
            <p className="text-xs font-medium text-[#525252]">
              {SKILL_SUMMARY}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {SKILL_GROUPS.map((group) => (
              <div key={group.label} className="pt-3 border-t border-black/8">
                <p className="text-[11px] font-semibold tracking-[0.12em] text-[#666666] mb-2">
                  {group.label}
                </p>
                <p className="text-sm font-medium text-[#1A1A1A] leading-relaxed">
                  {group.items.join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
