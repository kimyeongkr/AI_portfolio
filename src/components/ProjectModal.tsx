import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Maximize2, X } from 'lucide-react';
import type { ProjectItem } from '../data/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  projects: ProjectItem[];
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export function ProjectModal({
  project,
  projects,
  onClose,
  onSelectProject,
}: ProjectModalProps) {
  const [activeImage, setActiveImage] = useState<'hero' | 'detail'>('hero');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    setActiveImage('hero');
    setIsLightboxOpen(false);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isLightboxOpen) {
          setIsLightboxOpen(false);
        } else {
          onClose();
        }
        return;
      }

      if (isLightboxOpen) return;

      const currentIdx = projects.findIndex((item) => item.id === project.id);
      if (currentIdx === -1) return;

      if (event.key === 'ArrowRight') {
        const nextProject = projects[(currentIdx + 1) % projects.length];
        onSelectProject(nextProject);
      } else if (event.key === 'ArrowLeft') {
        const prevProject =
          projects[(currentIdx - 1 + projects.length) % projects.length];
        onSelectProject(prevProject);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, projects, isLightboxOpen, onClose, onSelectProject]);

  if (!project) return null;

  const currentIndex = projects.findIndex((item) => item.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];

  const displayedImage =
    activeImage === 'hero'
      ? { src: project.heroImage, alt: project.heroAlt, caption: project.subtitle }
      : {
          src: project.detailImage,
          alt: project.detailAlt,
          caption: project.detailCaption,
        };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalProjectTitle"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/65 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#F7F6F2] rounded-lg shadow-2xl border border-black/10 p-6 sm:p-8 md:p-10 text-[#1A1A1A]"
      >
        {/* Top Meta Bar & Close Button */}
        <div className="flex items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-2 text-xs font-medium text-[#595959] tabular-nums">
            <span className="font-mono">{project.index}</span>
            <span aria-hidden="true">/</span>
            <span>{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono">{project.period}</span>
          </div>

          <button
            type="button"
            aria-label="프로젝트 상세 창 닫기"
            onClick={onClose}
            className="w-10 h-10 -mr-2 -mt-2 inline-flex items-center justify-center rounded-md text-[#444444] hover:text-[#141414] hover:bg-black/5 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A1A1A]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Title & Subtitle */}
        <div className="mb-7">
          <h3
            id="modalProjectTitle"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-display text-[#141414]"
          >
            {project.title}
          </h3>
          <p className="text-sm md:text-base text-[#555555] mt-2 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Visual Showcase Area with Switchable Views */}
        <div className="mb-8">
          <div className="relative aspect-[16/10] w-full rounded-md overflow-hidden bg-[#EAE6DF] border border-black/8 group">
            <img
              src={displayedImage.src}
              alt={displayedImage.alt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              aria-label="이미지 크게 보기"
              className="absolute bottom-3.5 right-3.5 inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-white bg-[#141414]/80 hover:bg-[#141414] rounded-md transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              크게 보기
            </button>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-3">
            <p className="text-xs text-[#666666]">{displayedImage.caption}</p>

            <div className="inline-flex items-center gap-1 p-1 bg-[#EFECE6] rounded-md self-start sm:self-auto shrink-0">
              <button
                type="button"
                onClick={() => setActiveImage('hero')}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer whitespace-nowrap ${
                  activeImage === 'hero'
                    ? 'bg-white text-[#141414] shadow-xs'
                    : 'text-[#666666] hover:text-[#141414]'
                }`}
              >
                서비스 대표 화면
              </button>
              <button
                type="button"
                onClick={() => setActiveImage('detail')}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer whitespace-nowrap ${
                  activeImage === 'detail'
                    ? 'bg-white text-[#141414] shadow-xs'
                    : 'text-[#666666] hover:text-[#141414]'
                }`}
              >
                핵심 기능 상세
              </button>
            </div>
          </div>
        </div>

        {/* Background & Planning Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-7 border-t border-black/10">
          <div>
            <h4 className="text-xs font-bold tracking-[0.16em] text-[#666666] mb-2.5">
              PROBLEM DEFINITION
            </h4>
            <p className="text-sm text-[#333333] leading-relaxed">
              {project.background}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-[0.16em] text-[#666666] mb-2.5">
              PLANNING APPROACH
            </h4>
            <p className="text-sm text-[#333333] leading-relaxed">
              {project.approach}
            </p>
          </div>
        </div>

        {/* Key Planned Features */}
        <div className="py-7 border-t border-black/10">
          <h4 className="text-xs font-bold tracking-[0.16em] text-[#666666] mb-5">
            KEY FEATURES
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.highlights.map((item, idx) => (
              <div key={item.title} className="space-y-1.5">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-xs text-[#E05A47] tabular-nums">
                    0{idx + 1}
                  </span>
                  <h5 className="text-sm font-bold text-[#141414]">
                    {item.title}
                  </h5>
                </div>
                <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* User Flow Steps */}
        <div className="py-7 border-t border-black/10">
          <h4 className="text-xs font-bold tracking-[0.16em] text-[#666666] mb-4">
            USER FLOW
          </h4>
          <ol className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.flowSteps.map((step, idx) => (
              <li key={step} className="border-t border-black/15 pt-3">
                <span className="block font-mono text-[11px] text-[#737373] mb-1 tabular-nums">
                  STEP 0{idx + 1}
                </span>
                <span className="text-xs sm:text-[13px] font-semibold text-[#1A1A1A]">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* Outcome & Information Table */}
        <div className="py-7 border-t border-black/10 space-y-6">
          <div>
            <h4 className="text-xs font-bold tracking-[0.16em] text-[#666666] mb-2">
              OUTCOME &amp; TAKEAWAY
            </h4>
            <p className="text-sm text-[#333333] leading-relaxed">
              {project.outcome}
            </p>
          </div>

          <div className="pt-4 border-t border-black/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-[13px]">
              <div>
                <span className="block font-display font-bold text-[11px] tracking-[0.14em] text-[#666666] mb-1.5">
                  PROJECT INFORMATION
                </span>
                <p className="text-[#141414] font-semibold">
                  {project.roles.join(' · ')}
                </p>
              </div>
              <div className="sm:text-right">
                <span className="block font-display font-bold text-[11px] tracking-[0.14em] text-[#666666] mb-1.5">
                  TOOLS &amp; STACK
                </span>
                <p className="text-[#444444] font-mono">
                  {project.tools.join(' · ')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer: Switch between projects */}
        <div className="pt-5 border-t border-black/10 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => onSelectProject(prevProject)}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#444444] hover:text-[#141414] transition-colors py-2 cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A1A1A]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>이전 · {prevProject.title}</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectProject(nextProject)}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#444444] hover:text-[#141414] transition-colors py-2 cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A1A1A]"
          >
            <span>다음 · {nextProject.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Fullscreen Image Lightbox Overlay */}
      {isLightboxOpen && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            setIsLightboxOpen(false);
          }}
          className="fixed inset-0 z-60 bg-black/90 flex flex-col items-center justify-center p-4 sm:p-8"
        >
          <button
            type="button"
            aria-label="확대 이미지 닫기"
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={displayedImage.src}
            alt={displayedImage.alt}
            referrerPolicy="no-referrer"
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl max-h-[82vh] w-auto h-auto object-contain rounded-md shadow-2xl"
          />
          <p className="text-xs sm:text-sm text-white/80 mt-4 text-center">
            {project.title} — {displayedImage.caption}
          </p>
        </div>
      )}
    </div>
  );
}
