import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects({ onSelectProject }) {
  const projectList = [
    {
      id: 'ai-code-debugger',
      title: 'AI Code Error Debugger',
      tagline: 'Instant syntax, logic error detection and natural language stack trace explanations.',
      description: 'AI stack trace parser and logic bug fixer.',
      longDescription: 'AI debugging tool for stack trace parsing and automated refactoring.',
      tech: ['Python', 'AI / LLM API', 'React', 'Vite', 'Tailwind CSS', 'REST API'],
      architecture: [
        'Python API Backend processing code AST and error logs',
        'LLM Prompt Pipeline engineered for structured JSON output',
        'React + Vite UI with syntax-highlighted diff viewer',
        'Asynchronous error analysis with instant feedback loops',
      ],
      highlights: [
        'Natural language explanation of runtime exceptions',
        'Automated time and space complexity analysis',
        'Multi-language support for Python, C++, and JS',
      ],
      github: 'https://github.com/Y5213',
      demo: 'https://github.com/Y5213',
      category: 'AI TOOLING',
      codeSnippet: `def analyze_error(code_snippet: str, stack_trace: str):
    """
    Intelligent stack trace parser & LLM diagnostic engine.
    """
    prompt = build_diagnostic_prompt(code_snippet, stack_trace)
    analysis = llm_client.generate(prompt)
    return {
        "root_cause": analysis.root_cause,
        "suggested_fix": analysis.fix_snippet,
        "complexity": analysis.complexity_notes
    }`,
    },
    {
      id: 'multimind-ai',
      title: 'MultiMind AI',
      tagline: 'Versatile multi-model AI assistant workspace for brainstorming and code generation.',
      description: 'Unified multi-model AI assistant workspace.',
      longDescription: 'Multi-model workspace for real-time code generation and chat.',
      tech: ['Python', 'React', 'WebSockets', 'Tailwind CSS', 'AI Integration'],
      architecture: [
        'Python server orchestrating asynchronous AI integrations',
        'WebSocket connection layer for real-time token streaming',
        'Stateful session history management with local persistence',
        'Custom markdown & code renderer with copy actions',
      ],
      highlights: [
        'Multi-model provider switching in a single interface',
        'Real-time streaming response render engine',
        'Integrated code snippet exporter & prompt history',
      ],
      github: 'https://github.com/Y5213',
      demo: 'https://github.com/Y5213',
      category: 'AI APPLICATION',
      codeSnippet: `async def stream_multi_model(model_name: str, messages: list):
    """
    Real-time streaming handler for multi-model AI orchestrator.
    """
    provider = get_model_provider(model_name)
    async for chunk in provider.stream_chat(messages):
        yield f"data: {json.dumps(chunk)}\\n\\n"`,
    },
  ];

  return (
    <div className="h-full w-full relative flex flex-col justify-center py-20 md:py-24 bg-transparent overflow-y-auto">
      
      {/* Soft Ambient Moonlight Silver Light Glow */}
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-radial from-[#d4d8de]/06 via-transparent to-transparent blur-3xl pointer-events-none rounded-full z-0" />

      <div className="container relative z-10 my-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-6">
          <span className="section-tag">FEATURED WORK</span>
          <h2 className="section-title text-2xl sm:text-4xl font-serif text-neutral-100 font-normal">
            Personal Projects & <span className="italic text-[#d4d8de]">AI Tools</span>
          </h2>
          <p className="section-subtitle font-sans text-neutral-400">
            Hands-on AI applications built from scratch with Python and React.
          </p>
        </div>

        {/* Minimal Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectList.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-7 rounded-lg bg-[#16161a] border border-neutral-800/80 hover:border-[#d4d8de]/40 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(212,216,222,0.12)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Row with Working Links */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-sans text-[#d4d8de] uppercase tracking-wider font-semibold">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-[#d4d8de] transition-colors p-1 cursor-pointer"
                      title="Open GitHub Repository (https://github.com/Y5213)"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-[#d4d8de] transition-colors p-1 cursor-pointer"
                      title="Open Project Demo (https://github.com/Y5213)"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-serif font-normal text-neutral-100 mb-2 group-hover:text-[#d4d8de] transition-colors">
                  {project.title}
                </h3>

                {/* Tagline */}
                <p className="text-neutral-300 font-serif italic text-xs mb-3 border-l border-[#d4d8de]/50 pl-3 py-0.5">
                  "{project.tagline}"
                </p>

                {/* Trimmed Description (Part 1: 3-6 words) */}
                <p className="text-neutral-400 text-xs leading-normal mb-4 font-sans">
                  {project.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((techItem, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 text-[11px] font-sans group-hover:border-neutral-700 transition-colors"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-3 border-t border-neutral-800/80">
                <button
                  onClick={() => onSelectProject && onSelectProject(project)}
                  className="btn btn-secondary text-xs w-full py-2.5 justify-center text-neutral-300 hover:text-[#d4d8de] font-sans cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#d4d8de]" />
                  <span>View Architecture & Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
