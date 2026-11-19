import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../data/portfolio';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Header({ activeSection, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#F7F6F2]/90 backdrop-blur-md border-b border-black/8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="font-display font-extrabold text-lg md:text-xl tracking-tight text-[#1A1A1A] hover:text-[#E05A47] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A1A1A]"
        >
          KIM YEONG
        </a>

        {/* Zone 2: Primary Navigation Links */}
        <nav
          aria-label="주요 섹션 이동"
          className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-[0.14em] text-[#4A4A4A]"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`relative py-1 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A1A1A] ${
                  isActive ? 'text-[#1A1A1A]' : 'hover:text-[#1A1A1A]'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 -bottom-0.5 h-[1.5px] bg-[#1A1A1A] transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action & Mobile Drawer Trigger */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-[#F7F6F2] bg-[#1A1A1A] rounded-md hover:bg-[#E05A47] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A1A1A]"
          >
            협업 문의
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 text-[#1A1A1A] hover:text-[#E05A47] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A1A1A]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="모바일 메뉴"
          className="md:hidden bg-[#F7F6F2] border-t border-black/8 px-6 py-4 flex flex-col gap-1"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`py-3 text-sm font-semibold tracking-[0.12em] border-b border-black/6 last:border-b-0 transition-colors ${
                  isActive ? 'text-[#E05A47]' : 'text-[#1A1A1A]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
}
