import React, { useState } from 'react';
import { ArrowRight, Mail, Copy, Check, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero({ onNavigate }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('yashmejari7@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSlideJump = (e, index) => {
    e.preventDefault();
    if (onNavigate) onNavigate(index);
  };

  return (
    <div className="h-full w-full relative flex flex-col justify-between pt-20 pb-12 sm:pt-28 sm:pb-12 bg-transparent overflow-y-auto">
      
      {/* Soft Moonlight Silver Ambient Glow behind Content */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-radial from-[#d4d8de]/10 via-[#d4d8de]/02 to-transparent blur-3xl pointer-events-none rounded-full z-0" />
      <div className="absolute bottom-12 right-1/4 w-[450px] h-[450px] bg-radial from-[#d4d8de]/08 via-transparent to-transparent blur-3xl pointer-events-none rounded-full z-0" />

      <div className="container relative z-20 flex-1 flex flex-col justify-center my-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Editorial Headline & Bio Content */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start text-left relative z-20 max-w-full">
            
            {/* Clean Editorial Label */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#d4d8de] uppercase mb-3">
              <span>SOFTWARE DEVELOPER</span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-400">MUMBAI, INDIA</span>
            </div>

            {/* Editorial Serif Headline with Moonlight Silver Accent */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-neutral-100 tracking-tight leading-[1.12] mb-4">
              Hi, I'm{' '}
              <span className="font-serif italic text-[#d4d8de] relative inline-block">
                Yash Vilas Mejari
                <span className="absolute -inset-1 bg-[#d4d8de]/10 blur-xl rounded-full -z-10" />
              </span>
            </h1>

            {/* Role */}
            <p className="text-base sm:text-xl font-sans font-medium text-neutral-200 mb-4 leading-snug">
              Computer Science Undergraduate & Aspiring Software Developer
            </p>

            {/* Editorial Tagline */}
            <p className="text-sm sm:text-base text-neutral-300 font-serif italic mb-4 border-l-2 border-[#d4d8de]/60 pl-4 py-0.5">
              "Turning ideas into impact, one project at a time."
            </p>

            {/* Trimmed Intro Line (1 Short Line) */}
            <p className="text-neutral-400 text-xs sm:text-sm leading-normal mb-6 max-w-2xl font-sans">
              Passionate developer building clean solutions with strong DSA fundamentals.
            </p>

            {/* Action CTAs with Moonlight Hover Animations */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-6 relative z-30">
              <button
                onClick={(e) => handleSlideJump(e, 3)}
                className="btn btn-primary-silver text-xs sm:text-sm font-semibold !py-2.5 !px-6 cursor-pointer"
              >
                View Projects
              </button>
              <button
                onClick={(e) => handleSlideJump(e, 4)}
                className="btn btn-secondary text-xs sm:text-sm font-medium !py-2.5 !px-6 cursor-pointer"
              >
                Contact Me
              </button>
            </div>

            {/* Social Links & Quick Contact */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-neutral-800/80 w-full relative z-30">
              <span className="text-[11px] font-sans text-neutral-500 uppercase tracking-widest font-medium">
                Connect:
              </span>
              
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/Y5213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-neutral-300 hover:text-[#d4d8de] transition-all text-xs font-sans p-1 hover:scale-105"
                  title="GitHub Profile (https://github.com/Y5213)"
                >
                  <GithubIcon className="w-4 h-4 text-[#d4d8de]" />
                  <span>github.com/Y5213</span>
                  <ExternalLink className="w-3 h-3 text-neutral-500" />
                </a>

                <span className="text-neutral-700">•</span>

                <a
                  href="https://www.linkedin.com/in/yash-mejari-396600334/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-[#d4d8de] transition-all p-1 hover:scale-110"
                  title="LinkedIn Profile (https://www.linkedin.com/in/yash-mejari-396600334/)"
                >
                  <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>

                <span className="text-neutral-700">•</span>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 text-neutral-400 hover:text-[#d4d8de] transition-colors text-[11px] sm:text-xs font-sans ml-1 cursor-pointer"
                  title="Click to copy email address"
                >
                  <Mail className="w-3.5 h-3.5 text-[#d4d8de]" />
                  <span>yashmejari7@gmail.com</span>
                  {copiedEmail ? (
                    <Check className="w-3 h-3 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-neutral-500" />
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Right Visual: Clean Unframed Editorial Square Portrait */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col items-center lg:items-end justify-center mt-2 lg:mt-0 relative">
            
            {/* Subtle Backlight Glow behind Portrait */}
            <div className="absolute inset-0 bg-[#d4d8de]/10 blur-2xl rounded-full -z-10 transform scale-90" />

            <div className="relative w-48 sm:w-60 md:w-64 lg:w-72 aspect-square">
              <img
                src="/hero-photo.jpg"
                alt="Yash Vilas Mejari - Moonlight Portrait"
                className="w-full h-full object-cover object-center rounded-lg shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

            <div className="mt-3 text-center lg:text-right w-full max-w-xs font-sans text-[11px] text-neutral-400 font-medium">
              <span>Moonlight Night • Bandra Sea Link • GATE 2027</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Navigation Cue */}
      <div className="container relative z-20 flex justify-center pb-2">
        <button
          onClick={(e) => handleSlideJump(e, 1)}
          className="flex items-center gap-1.5 text-neutral-500 hover:text-[#d4d8de] transition-colors text-[10px] font-sans tracking-widest font-medium uppercase group cursor-pointer focus:outline-none"
        >
          <span>ABOUT ME</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}
