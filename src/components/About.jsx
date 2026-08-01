import React from 'react';

export default function About() {
  const timelineEvents = [
    {
      stage: 'STAGE 01',
      title: 'Computer Science Degree',
      subtitle: 'Academic Foundations',
      description: 'B.Tech in Computer Science fundamentals.',
      tag: 'B.Tech CS',
      isHighlight: false,
    },
    {
      stage: 'STAGE 02',
      title: 'Algorithmic Self-Study & Python',
      subtitle: 'Daily Problem Solving',
      description: "Daily DSA on Striver's A2Z Sheet.",
      tag: 'Striver A2Z DSA',
      isHighlight: true,
    },
    {
      stage: 'STAGE 03',
      title: 'Hands-on AI Project Development',
      subtitle: 'Product Building',
      description: 'Building AI debugger and multi-model tools.',
      tag: 'AI Engineering',
      isHighlight: false,
    },
    {
      stage: 'STAGE 04',
      title: 'GATE 2027 Preparation',
      subtitle: 'Deep CS Competence',
      description: 'Mastering core CS subjects for GATE 2027.',
      tag: 'GATE 2027 CS',
      isHighlight: false,
    },
  ];

  return (
    <div className="h-full w-full relative flex flex-col justify-center py-20 md:py-24 bg-transparent overflow-y-auto">
      
      {/* Soft Ambient Moonlight Silver Light Glow */}
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-radial from-[#d4d8de]/06 via-transparent to-transparent blur-3xl pointer-events-none rounded-full z-0" />

      <div className="container relative z-10 my-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-6">
          <span className="section-tag">ABOUT ME</span>
          <h2 className="section-title text-2xl sm:text-4xl font-serif text-neutral-100 font-normal">
            Driven by Curiosity, <span className="italic text-[#d4d8de]">Grounded in Logic</span>
          </h2>
        </div>

        {/* Trimmed Bio Intro Paragraph (Part 1: Exactly 1 Short Line) */}
        <div className="max-w-3xl mb-8 text-neutral-300 text-xs sm:text-sm leading-normal font-sans">
          <p>
            Fresher developer focused on DSA, Python, and modern software engineering.
          </p>
        </div>

        {/* Vertical Connected Timeline - Moonlight Silver Styling */}
        <div className="relative border-l border-neutral-800 ml-3 sm:ml-6 md:ml-8 pl-5 sm:pl-8 space-y-6">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Node Dot - Moonlight Silver Illumination */}
              <div
                className={`absolute -left-[25px] sm:-left-[37px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#0e0e11] border-2 transition-all duration-300 ${
                  event.isHighlight
                    ? 'border-[#d4d8de] bg-[#d4d8de] shadow-[0_0_8px_#d4d8de]'
                    : 'border-neutral-600 bg-neutral-900 group-hover:border-[#d4d8de] group-hover:bg-[#d4d8de] group-hover:shadow-[0_0_8px_#d4d8de]'
                }`}
              />

              {/* Entry Content */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-start p-2.5 sm:p-3 rounded-lg bg-transparent hover:bg-[#16161a] border border-transparent hover:border-neutral-800/80 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-all duration-300">
                
                {/* Stage Label Column */}
                <div className="md:col-span-3 flex flex-col">
                  <span className={`text-xs font-sans font-semibold tracking-wider ${event.isHighlight ? 'text-[#d4d8de]' : 'text-neutral-400 group-hover:text-[#d4d8de] transition-colors'}`}>
                    {event.stage}
                  </span>
                  <span className="text-[11px] font-sans text-neutral-500 mt-0.5">
                    {event.subtitle}
                  </span>
                </div>

                {/* Main Story Column */}
                <div className="md:col-span-9">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-sm sm:text-base font-sans font-semibold text-neutral-100 group-hover:text-[#d4d8de] transition-colors">
                      {event.title}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-sans text-neutral-400 bg-neutral-900 border border-neutral-800">
                      {event.tag}
                    </span>
                  </div>
                  <p className="text-neutral-400 text-xs leading-normal max-w-2xl font-sans">
                    {event.description}
                  </p>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
