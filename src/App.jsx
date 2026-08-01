import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Layers, Sparkles, Terminal, CheckCircle, ExternalLink } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactFooter from './components/ContactFooter';
import { GithubIcon } from './components/Icons';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const isScrollingRef = useRef(false);
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);

  const slideSections = [
    { id: 'home', label: '01 Home' },
    { id: 'about', label: '02 About' },
    { id: 'skills', label: '03 Skills' },
    { id: 'projects', label: '04 Projects' },
    { id: 'contact', label: '05 Contact' },
  ];

  const totalSlides = slideSections.length;

  const goToSlide = (index) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlideIndex(index);
    }
  };

  const nextSlide = () => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedProject) {
        if (e.key === 'Escape') setSelectedProject(null);
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex, selectedProject]);

  // Wheel slide navigation
  useEffect(() => {
    const handleWheel = (e) => {
      if (selectedProject) return;
      if (isScrollingRef.current) return;

      const delta = e.deltaY || e.deltaX;
      if (Math.abs(delta) > 25) {
        isScrollingRef.current = true;
        if (delta > 0) {
          nextSlide();
        } else {
          prevSlide();
        }

        setTimeout(() => {
          isScrollingRef.current = false;
        }, 700);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSlideIndex, selectedProject]);

  // Touch Swipe Handling
  const handleTouchStart = (e) => {
    if (selectedProject) return;
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (selectedProject) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartXRef.current - touchEndX;
    const diffY = touchStartYRef.current - touchEndY;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <div 
      className="h-[100dvh] w-screen bg-[#0e0e11] text-[#eaeaea] selection:bg-[#d4d8de]/25 selection:text-[#d4d8de] relative overflow-hidden flex flex-col justify-between"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Full-Bleed Fixed Moonlight Moodboard Background */}
      <div className="site-bg-overlay" />

      {/* Sticky Blurred Glass Navbar */}
      <Navbar activeSlideIndex={currentSlideIndex} onNavigate={goToSlide} />

      {/* Quiet Chevron Navigation Buttons */}
      {currentSlideIndex > 0 && (
        <button
          onClick={prevSlide}
          className="fixed left-3 sm:left-5 top-1/2 -translate-y-1/2 z-40 p-2.5 sm:p-3 rounded-full bg-[#16161a]/90 border border-neutral-800 text-neutral-400 hover:text-[#d4d8de] hover:border-[#d4d8de]/50 hover:shadow-[0_0_15px_rgba(212,216,222,0.2)] backdrop-blur-md transition-all cursor-pointer hover:scale-110 shadow-lg focus:outline-none hidden sm:flex"
          title="Previous Slide"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}

      {currentSlideIndex < totalSlides - 1 && (
        <button
          onClick={nextSlide}
          className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-40 p-2.5 sm:p-3 rounded-full bg-[#16161a]/90 border border-neutral-800 text-neutral-400 hover:text-[#d4d8de] hover:border-[#d4d8de]/50 hover:shadow-[0_0_15px_rgba(212,216,222,0.2)] backdrop-blur-md transition-all cursor-pointer hover:scale-110 shadow-lg focus:outline-none hidden sm:flex"
          title="Next Slide"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}

      {/* Slide Pagination Dots (Bottom Center - Moonlight Silver Glow) */}
      <div className="fixed bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#16161a]/95 border border-neutral-800 backdrop-blur-md shadow-lg">
        {slideSections.map((slide, index) => {
          const isActive = currentSlideIndex === index;
          return (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`flex items-center gap-1.5 px-2 py-1 rounded transition-all duration-300 cursor-pointer focus:outline-none ${
                isActive
                  ? 'bg-[#d4d8de]/15 text-[#d4d8de] font-medium border border-[#d4d8de]/30'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
              title={`Slide ${index + 1}: ${slide.label}`}
            >
              <div className={`transition-all duration-300 rounded-full ${
                isActive 
                  ? 'w-2.5 h-2.5 bg-[#d4d8de] shadow-[0_0_10px_#d4d8de]' 
                  : 'w-1.5 h-1.5 bg-neutral-600'
              }`} />
              <span className={`text-[10px] font-sans tracking-wider uppercase ${
                isActive ? 'font-semibold' : 'hidden md:inline opacity-80'
              }`}>
                {slide.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Horizontal Slide Track */}
      <div className="w-full h-full relative overflow-hidden flex-1 z-10">
        <div 
          className="flex h-full w-full transition-transform duration-700 cubic-bezier(0.65, 0, 0.35, 1)"
          style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
        >
          {/* SLIDE 0: HERO */}
          <div className="w-screen h-full shrink-0 flex-none relative overflow-hidden">
            <Hero onNavigate={goToSlide} />
          </div>

          {/* SLIDE 1: ABOUT */}
          <div className="w-screen h-full shrink-0 flex-none relative overflow-hidden">
            <About />
          </div>

          {/* SLIDE 2: SKILLS */}
          <div className="w-screen h-full shrink-0 flex-none relative overflow-hidden">
            <Skills />
          </div>

          {/* SLIDE 3: PROJECTS */}
          <div className="w-screen h-full shrink-0 flex-none relative overflow-hidden">
            <Projects onSelectProject={setSelectedProject} />
          </div>

          {/* SLIDE 4: CONTACT */}
          <div className="w-screen h-full shrink-0 flex-none relative overflow-hidden">
            <ContactFooter onNavigate={goToSlide} />
          </div>
        </div>
      </div>

      {/* Top Thin Moonlight Silver Progress Line */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-neutral-900 z-50">
        <div 
          className="h-full bg-[#d4d8de] shadow-[0_0_8px_#d4d8de] transition-all duration-700"
          style={{ width: `${((currentSlideIndex + 1) / totalSlides) * 100}%` }}
        />
      </div>

      {/* ROOT-LEVEL PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[#16161a] border border-neutral-800 rounded-lg p-6 sm:p-8 shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-sans font-semibold text-[#d4d8de] uppercase tracking-wider">
                {selectedProject.category}
              </span>
              <span className="text-xs font-sans text-neutral-500">• Technical Deep Dive</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif text-neutral-100 mb-1">
              {selectedProject.title}
            </h2>
            <p className="text-neutral-300 text-sm font-serif italic mb-6">
              "{selectedProject.tagline}"
            </p>

            {/* Detailed Description */}
            <div className="mb-6 p-4 rounded-lg bg-[#0e0e11] border border-neutral-800">
              <h4 className="text-xs font-sans text-neutral-400 uppercase tracking-wider font-semibold mb-2">Context & Overview</h4>
              <p className="text-neutral-300 text-xs sm:text-sm leading-normal font-sans">
                {selectedProject.longDescription}
              </p>
            </div>

            {/* Architecture & Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
              <div className="p-4 rounded-lg bg-[#0e0e11] border border-neutral-800">
                <h4 className="text-xs sm:text-sm font-sans font-semibold text-neutral-100 mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#d4d8de]" />
                  Architecture Highlights
                </h4>
                <ul className="space-y-2">
                  {selectedProject.architecture.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300 font-sans">
                      <CheckCircle className="w-3.5 h-3.5 text-[#d4d8de] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-[#0e0e11] border border-neutral-800">
                <h4 className="text-xs sm:text-sm font-sans font-semibold text-neutral-100 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#d4d8de]" />
                  Key Capabilities
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300 font-sans">
                      <CheckCircle className="w-3.5 h-3.5 text-[#d4d8de] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Code Snippet */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-sans text-neutral-400 uppercase tracking-wider font-semibold flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#d4d8de]" />
                  Python Implementation Snippet
                </h4>
                <span className="text-[10px] font-mono text-neutral-500">Python 3.11</span>
              </div>
              <pre className="p-4 rounded-lg bg-[#0a0a0d] border border-neutral-800 text-xs font-mono text-neutral-200 overflow-x-auto">
                <code>{selectedProject.codeSnippet}</code>
              </pre>
            </div>

            {/* Modal Links Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-800">
              <div className="flex items-center gap-3">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded bg-[#0e0e11] border border-neutral-800 text-neutral-300 hover:text-white hover:border-[#d4d8de]/40 text-xs font-sans transition-colors cursor-pointer"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-[#d4d8de]" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 text-neutral-500" />
                </a>

                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded bg-[#0e0e11] border border-neutral-800 text-neutral-300 hover:text-[#d4d8de] hover:border-[#d4d8de]/40 text-xs font-sans transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#d4d8de]" />
                  <span>Live Demo</span>
                </a>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="btn btn-secondary text-xs !py-2 !px-4 cursor-pointer"
              >
                Close Modal
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
