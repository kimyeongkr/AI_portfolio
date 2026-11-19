import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  PROJECTS,
  PROJECT_FILTERS,
  type ProjectCategory,
  type ProjectItem,
} from '../data/portfolio';

interface WorksSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

function ProjectThumbnail({
  src,
  alt,
  title,
  index,
}: {
  src: string;
  alt: string;
  title: string;
  index: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full bg-[#EFECE6] flex flex-col items-center justify-center p-6 text-center">
        <span className="font-mono text-xs text-[#666666] mb-1.5 tabular-nums">
          Project {index}
        </span>
        <span className="font-display font-bold text-lg text-[#1A1A1A]">
          {title}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
    />
  );
}

export function WorksSection({ onSelectProject }: WorksSectionProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const visibleProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <section id="works" className="py-24 md:py-28 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header + Interactive Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-8 mb-14">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-[#666666] block mb-2">
              Selected Projects
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold font-display tracking-tight text-[#141414] leading-none">
              WORKS<span className="text-[#E05A47]">.</span>
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="프로젝트 분야 필터"
            className="inline-flex items-center gap-1 p-1 bg-[#F7F6F2] rounded-lg border border-black/6 self-start md:self-auto"
          >
            {PROJECT_FILTERS.map((filter) => {
              const isSelected = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A1A1A] ${
                    isSelected
                      ? 'bg-white text-[#141414] shadow-xs'
                      : 'text-[#666666] hover:text-[#141414]'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {visibleProjects.map((project) => (
            <article key={project.id} className="group flex flex-col">
              <button
                type="button"
                onClick={() => onSelectProject(project)}
                aria-label={`${project.title} 프로젝트 상세 보기`}
                className="text-left w-full flex flex-col cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A1A1A] rounded-lg"
              >
                <div className="aspect-video w-full rounded-lg overflow-hidden bg-[#F3F1EC] mb-5 relative border border-black/8">
                  <ProjectThumbnail
                    src={project.heroImage}
                    alt={project.heroAlt}
                    title={project.title}
                    index={project.index}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute bottom-3.5 right-3.5 w-9 h-9 rounded-full bg-[#1A1A1A]/85 text-white flex items-center justify-center opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="flex items-baseline justify-between gap-4">
                  <div className="flex items-baseline gap-2.5 min-w-0">
                    <span className="font-mono text-xs text-[#737373] tabular-nums shrink-0">
                      {project.index}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-[#141414] group-hover:text-[#E05A47] transition-colors truncate">
                      {project.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-[#666666] tabular-nums whitespace-nowrap shrink-0">
                    {project.period}
                  </span>
                </div>

                <p className="text-sm md:text-[15px] text-[#444444] leading-relaxed mt-2.5">
                  {project.summary}
                </p>

                <div className="w-full text-xs text-[#666666] font-medium mt-4 pt-3.5 border-t border-black/8 flex items-center justify-between gap-4">
                  <span className="truncate">{project.roles.join(' · ')}</span>
                  <span className="inline-flex items-center gap-1 text-[#1A1A1A] font-semibold group-hover:text-[#E05A47] transition-colors whitespace-nowrap shrink-0">
                    케이스 스터디
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
