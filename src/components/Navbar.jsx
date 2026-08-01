import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Navbar({ activeSlideIndex = 0, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home', index: 0 },
    { name: 'About', id: 'about', index: 1 },
    { name: 'Skills', id: 'skills', index: 2 },
    { name: 'Projects', id: 'projects', index: 3 },
    { name: 'Contact', id: 'contact', index: 4 },
  ];

  const handleLinkClick = (e, index) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(index);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0e0e11]/90 backdrop-blur-md border-b border-neutral-800/80 py-4">
      <div className="container flex items-center justify-between">
        
        {/* Brand / Logo */}
        <button
          onClick={(e) => handleLinkClick(e, 0)}
          className="group flex items-start text-left focus:outline-none cursor-pointer"
        >
          <div className="flex flex-col items-start leading-none gap-1">
            <span className="font-bold text-xl tracking-tight text-neutral-100 group-hover:text-[#d4d8de] transition-colors leading-none">
              Shiv<span className="text-[#d4d8de]">KG</span>
            </span>
            <span className="text-[10px] font-sans tracking-widest text-neutral-400 uppercase leading-none font-medium">
              Software Developer
            </span>
          </div>
        </button>

        {/* Desktop Nav Links & Direct GitHub Button */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSlideIndex === link.index;
              return (
                <button
                  key={link.id}
                  onClick={(e) => handleLinkClick(e, link.index)}
                  className={`text-sm font-medium tracking-wide transition-colors text-decoration-none relative cursor-pointer focus:outline-none ${
                    isActive
                      ? 'text-[#d4d8de] font-semibold'
                      : 'text-neutral-400 hover:text-neutral-100'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#d4d8de] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          <a
            href="https://github.com/Y5213"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded bg-neutral-900 border border-neutral-800 text-xs font-sans text-neutral-300 hover:text-[#d4d8de] hover:border-[#d4d8de]/40 transition-all hover:scale-105"
            title="Visit GitHub Profile (https://github.com/Y5213)"
          >
            <GithubIcon className="w-3.5 h-3.5 text-[#d4d8de]" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-neutral-400 hover:text-neutral-100 focus:outline-none cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#16161a] border-b border-neutral-800 px-6 py-6 mt-4 shadow-xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = activeSlideIndex === link.index;
              return (
                <button
                  key={link.id}
                  onClick={(e) => handleLinkClick(e, link.index)}
                  className={`text-base font-medium text-left py-2 transition-colors focus:outline-none cursor-pointer ${
                    isActive ? 'text-[#d4d8de] font-semibold' : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}

            <a
              href="https://github.com/Y5213"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded bg-neutral-900 border border-neutral-800 text-sm font-sans text-neutral-200 hover:text-[#d4d8de] mt-2"
            >
              <GithubIcon className="w-4 h-4 text-[#d4d8de]" />
              <span>GitHub (github.com/Y5213)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
