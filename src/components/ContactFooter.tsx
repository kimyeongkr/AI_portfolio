import { useState } from 'react';
import { ArrowUp, ArrowUpRight, Check, Copy } from 'lucide-react';
import { CONTACT_EMAIL } from '../data/portfolio';

interface ContactFooterProps {
  onBackToTop: () => void;
}

export function ContactFooter({ onBackToTop }: ContactFooterProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      const tempInput = document.createElement('input');
      tempInput.value = CONTACT_EMAIL;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <>
      {/* Contact Callout Section */}
      <section
        id="contact"
        className="relative py-24 md:py-28 px-6 md:px-12 text-[#1A1A1A] contact-editorial-bg overflow-hidden"
      >
        <div aria-hidden="true" className="absolute inset-0 editorial-grain pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-[#4A3B34] block mb-3">
              Let&apos;s Connect
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight text-[#1A1A1A] leading-[1.08]">
              LET&apos;S WORK
              <br />
              <span className="font-serif-italic font-normal">TOGETHER.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="text-sm text-[#2E2622] font-medium">
              새로운 작업과 협업을 기다립니다.
            </p>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-xl sm:text-2xl font-semibold tracking-tight text-[#1A1A1A] hover:text-black transition-colors border-b border-black/35 hover:border-black pb-1.5 inline-flex items-center gap-1.5 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A1A1A]"
            >
              <span>{CONTACT_EMAIL}</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#1A1A1A] bg-black/[0.08] hover:bg-black/[0.14] rounded-md transition-colors duration-200 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A1A1A]"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>이메일 주소 복사됨</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>이메일 주소 복사</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Site Footer */}
      <footer className="bg-[#F6BE93] text-[#2A2421] text-xs py-6 px-6 md:px-12 border-t border-black/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 font-medium">
          <p className="tracking-wider tabular-nums">© 2026 KIM YEONG</p>
          <p className="tracking-[0.16em] text-[#3F3631]">
            SERVICE PLANNING PORTFOLIO
          </p>
          <button
            type="button"
            onClick={onBackToTop}
            className="inline-flex items-center gap-1.5 tracking-wider hover:text-black transition-colors py-1 cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A1A1A]"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </footer>
    </>
  );
}
