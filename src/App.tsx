import { useCallback, useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactFooter } from './components/ContactFooter';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectModal } from './components/ProjectModal';
import { VisionSection } from './components/VisionSection';
import { WorksSection } from './components/WorksSection';
import { PROJECTS, type ProjectItem } from './data/portfolio';

const OBSERVED_SECTIONS = ['home', 'works', 'about', 'contact'] as const;

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  useEffect(() => {
    const elements = OBSERVED_SECTIONS.map((id) =>
      document.getElementById(id)
    ).filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#1A1A1A]">
      <Header activeSection={activeSection} onNavigate={scrollToSection} />

      <main>
        <Hero onExplore={() => scrollToSection('vision')} />
        <VisionSection />
        <WorksSection onSelectProject={setSelectedProject} />
        <AboutSection />
        <ContactFooter onBackToTop={() => scrollToSection('home')} />
      </main>

      <ProjectModal
        project={selectedProject}
        projects={PROJECTS}
        onClose={() => setSelectedProject(null)}
        onSelectProject={setSelectedProject}
      />
    </div>
  );
}
