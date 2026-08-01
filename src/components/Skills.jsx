import React, { useState } from 'react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'languages', name: 'Languages' },
    { id: 'core-cs', name: 'Core CS' },
    { id: 'tools', name: 'Tools & Dev' },
    { id: 'learning', name: 'Currently Learning' },
  ];

  const skillItems = [
    // Languages
    {
      name: 'Python',
      category: 'languages',
      level: 'Primary Language',
      description: 'Daily DSA and AI tool development.',
      icon: '🐍',
      isLearning: false,
    },
    {
      name: 'C++',
      category: 'languages',
      level: 'Strong Academic',
      description: 'Academic coursework and problem solving.',
      icon: '⚡',
      isLearning: false,
    },
    {
      name: 'Java',
      category: 'languages',
      level: 'Object-Oriented CS',
      description: 'OOP principles and class architecture.',
      icon: '☕',
      isLearning: false,
    },
    {
      name: 'JavaScript / HTML / CSS',
      category: 'languages',
      level: 'Web Foundations',
      description: 'Modern responsive web interfaces.',
      icon: '🌐',
      isLearning: false,
    },
    {
      name: 'SQL',
      category: 'languages',
      level: 'Relational Queries',
      description: 'Relational queries and data modeling.',
      icon: '🗄️',
      isLearning: false,
    },

    // Core CS
    {
      name: 'Data Structures & Algorithms',
      category: 'core-cs',
      level: 'Active Practice',
      description: 'Arrays, Trees, Graphs, and DP.',
      icon: 'brain',
      isLearning: false,
    },
    {
      name: 'DBMS (Database Systems)',
      category: 'core-cs',
      level: 'Core Theory',
      description: 'Transactions, SQL, and indexing.',
      icon: '💾',
      isLearning: false,
    },
    {
      name: 'Operating Systems',
      category: 'core-cs',
      level: 'Core Theory',
      description: 'Process management and memory.',
      icon: '⚙️',
      isLearning: false,
    },
    {
      name: 'Computer Networks',
      category: 'core-cs',
      level: 'Core Theory',
      description: 'TCP/IP, HTTP, and socket basics.',
      icon: '📡',
      isLearning: false,
    },

    // Tools
    {
      name: 'Git & GitHub',
      category: 'tools',
      level: 'Version Control',
      description: 'Branching and version control.',
      icon: '🐙',
      isLearning: false,
    },
    {
      name: 'VS Code & Workstation',
      category: 'tools',
      level: 'Daily Dev',
      description: 'Workstation setup and debugging.',
      icon: '💻',
      isLearning: false,
    },
    {
      name: 'Vite & React Ecosystem',
      category: 'tools',
      level: 'Frontend Tooling',
      description: 'Component architecture and hooks.',
      icon: '⚛️',
      isLearning: false,
    },

    // Currently Learning
    {
      name: 'System Design Fundamentals',
      category: 'learning',
      level: 'In Progress',
      description: 'Scalability and RESTful APIs.',
      icon: '🏗️',
      isLearning: true,
    },
    {
      name: 'Full-Stack Development',
      category: 'learning',
      level: 'In Progress',
      description: 'Python backends and React frontends.',
      icon: '🚀',
      isLearning: true,
    },
    {
      name: 'GATE 2027 Syllabus Depth',
      category: 'learning',
      level: 'In Progress',
      description: 'Comprehensive CS subject syllabus.',
      icon: '📚',
      isLearning: true,
    },
  ];

  const filteredSkills =
    activeTab === 'all'
      ? skillItems
      : skillItems.filter((item) => item.category === activeTab);

  return (
    <div className="h-full w-full relative flex flex-col justify-center py-20 md:py-24 bg-transparent overflow-y-auto">
      
      {/* Soft Backdrop Light */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-radial from-[#d4d8de]/06 via-transparent to-transparent blur-3xl pointer-events-none rounded-full z-0" />

      <div className="container relative z-10 my-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-6">
          <span className="section-tag">TECHNICAL TOOLKIT</span>
          <h2 className="section-title text-2xl sm:text-4xl font-serif text-neutral-100 font-normal">
            Skills & <span className="italic text-[#d4d8de]">Competencies</span>
          </h2>
          <p className="section-subtitle font-sans text-neutral-400">
            Core languages, theoretical CS foundations, and active developer toolkit.
          </p>
        </div>

        {/* Category Tabs - Moonlight Silver Styling */}
        <div className="flex flex-wrap items-center gap-2 mb-6 border-b border-neutral-800 pb-3">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`text-xs font-sans font-medium tracking-wide transition-all duration-300 cursor-pointer px-3 py-1.5 rounded ${
                  isActive
                    ? 'bg-[#d4d8de]/15 text-[#d4d8de] border border-[#d4d8de]/40 shadow-[0_0_12px_rgba(212,216,222,0.15)] font-semibold'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Minimal Card Grid with Moonlight Silver Hover Illumination */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg bg-[#16161a] border border-neutral-800/80 hover:border-[#d4d8de]/40 hover:-translate-y-1.5 hover:shadow-[0_10px_28px_rgba(212,216,222,0.12)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-base group-hover:scale-110 transition-transform">{skill.icon === 'brain' ? '🧠' : skill.icon}</span>
                  {skill.isLearning ? (
                    <span className="text-[10px] font-sans font-medium text-[#d4d8de] bg-[#d4d8de]/10 px-2 py-0.5 rounded border border-[#d4d8de]/30">
                      Learning
                    </span>
                  ) : (
                    <span className="text-[11px] font-sans text-neutral-500">
                      {skill.level}
                    </span>
                  )}
                </div>

                {/* Skill Name */}
                <h3 className="font-semibold font-sans text-xs sm:text-sm text-neutral-100 mb-1 group-hover:text-[#d4d8de] transition-colors">
                  {skill.name}
                </h3>

                {/* Trimmed Description (Part 1: 3-6 words) */}
                <p className="text-xs text-neutral-400 leading-normal font-sans">
                  {skill.description}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-neutral-800/60 flex items-center justify-between text-[10px] font-sans text-neutral-500">
                <span className="uppercase tracking-wider font-medium">{skill.category.replace('-', ' ')}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
