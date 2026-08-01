import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, ArrowUp, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function ContactFooter({ onNavigate }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('yashmejari7@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const scrollToTop = () => {
    if (onNavigate) {
      onNavigate(0);
    }
  };

  return (
    <div className="h-full w-full relative flex flex-col justify-between pt-20 pb-8 md:pt-24 md:pb-12 bg-transparent overflow-y-auto">
      <div className="container relative z-10 my-auto px-4 sm:px-6">
        
        {/* Contact Section Header */}
        <div className="flex flex-col items-start mb-8">
          <span className="section-tag">CONTACT</span>
          <h2 className="section-title text-2xl sm:text-4xl font-serif text-neutral-100 font-normal">
            Let's Build Something <span className="italic text-[#d4d8de]">Impactful Together</span>
          </h2>
          <p className="section-subtitle font-sans text-neutral-400">
            Open to software engineering internships and entry-level developer roles.
          </p>
        </div>

        {/* Minimal Editorial Contact Cards Grid (Form Removed) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-10">
          
          {/* GitHub Profile Card */}
          <div className="p-6 sm:p-7 rounded-lg bg-[#16161a] border border-neutral-800/80 hover:border-[#d4d8de]/40 hover:shadow-[0_12px_32px_rgba(212,216,222,0.12)] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded bg-[#0e0e11] text-[#d4d8de] border border-neutral-800">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-sans font-medium text-neutral-500 uppercase tracking-wider">
                  Code & Projects
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-serif font-normal text-neutral-100 mb-1 group-hover:text-[#d4d8de] transition-colors">
                GitHub Repository
              </h3>
              <p className="text-xs text-neutral-400 font-sans leading-normal mb-4">
                Explore source code, repositories, and technical projects.
              </p>
              <p className="text-sm font-semibold font-sans text-neutral-200 mb-6">
                github.com/Y5213
              </p>
            </div>

            <a
              href="https://github.com/Y5213"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary text-xs w-full py-2.5 justify-center font-sans cursor-pointer group-hover:border-[#d4d8de]/50"
            >
              <span>Visit GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#d4d8de]" />
            </a>
          </div>

          {/* Direct Email Card */}
          <div className="p-6 sm:p-7 rounded-lg bg-[#16161a] border border-neutral-800/80 hover:border-[#d4d8de]/40 hover:shadow-[0_12px_32px_rgba(212,216,222,0.12)] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded bg-[#0e0e11] text-[#d4d8de] border border-neutral-800">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-sans font-medium text-neutral-500 uppercase tracking-wider">
                  Direct Contact
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-serif font-normal text-neutral-100 mb-1 group-hover:text-[#d4d8de] transition-colors">
                Email Address
              </h3>
              <p className="text-xs text-neutral-400 font-sans leading-normal mb-4">
                Send inquiries, opportunities, or requests directly to my inbox.
              </p>
              <p className="text-sm font-semibold font-sans text-neutral-200 mb-6">
                yashmejari7@gmail.com
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="mailto:yashmejari7@gmail.com"
                className="btn btn-primary-silver text-xs py-2.5 justify-center font-sans cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="btn btn-secondary text-xs py-2.5 justify-center font-sans cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#d4d8de]" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

        {/* Social Links & Availability Bar */}
        <div className="p-4 rounded-lg bg-[#16161a] border border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#d4d8de] shrink-0 shadow-[0_0_8px_#d4d8de]" />
            <p className="text-xs sm:text-sm font-medium text-neutral-300 font-sans">
              Open to internship and entry-level software developer roles.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs font-sans text-neutral-500 uppercase tracking-widest font-medium">
              Socials:
            </span>
            <a
              href="https://github.com/Y5213"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-[#d4d8de] transition-colors p-1"
              title="GitHub Profile (https://github.com/Y5213)"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/yash-mejari-396600334/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-[#d4d8de] transition-colors p-1"
              title="LinkedIn Profile (https://www.linkedin.com/in/yash-mejari-396600334/)"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-5 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500 font-sans">
          <div>
            <span className="font-semibold text-neutral-200">ShivKG</span> • Yash Vilas Mejari © 2026. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Y5213"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d4d8de] transition-colors"
            >
              github.com/Y5213
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-neutral-400 hover:text-[#d4d8de] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
