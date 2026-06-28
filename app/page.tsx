// src/app/page.tsx
'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Briefcase, GraduationCap, Sparkles, Send, Github } from 'lucide-react';
import Scene3D from './components/Scene3D';

export default function Home() {
  const [activeTab, setActiveTab] = useState('experience');
  const [jobRole, setJobRole] = useState('');
  const [generatedLetter, setGeneratedLetter] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // Resume Data Structures
  const experience = [
    {
      role: "Technical Project Lead",
      company: "Exhibition Initiative",
      period: "2024",
      highlights: ["Developed a concept-to-launch full-stack interactive quiz website architecture.", "Led a technical team to successfully deploy localized web products under tight deadlines."]
    },
    {
      role: "Chief of Staff",
      company: "Model United Nations",
      period: "2023 - 2024",
      highlights: ["Managed multi-tiered operational logistics and strategic execution frameworks.", "Coordinated cross-functional teams to streamline international conference operations."]
    },
    {
      role: "Digital Media Executive & Founder",
      company: "YouTube Media Platform",
      period: "2016 - 2022",
      highlights: ["Scaled an independent digital channel to over 75 million cumulative views.", "Engineered algorithmic content strategies and deployed video editing pipelines."]
    }
  ];

  const education = [
    {
      degree: "B.S. in Computer Science",
      institution: "University of Texas at San Antonio (UTSA)",
      period: "Present",
      details: "Focusing on Software Systems, Algorithmic Analysis, and Intelligent Systems architecture."
    },
    {
      degree: "Cambridge Advanced AS & A Levels",
      institution: "DSR International School",
      period: "Completed",
      details: "Advanced specializations in Physics, Chemistry, Information Technology, Mathematics, and English."
    }
  ];

  const skills = [
    { cat: "Languages", items: ["Python", "Java", "JavaScript", "TypeScript", "HTML5/CSS3"] },
    { cat: "Frameworks & 3D", items: ["Next.js", "React Three Fiber", "Three.js", "Tailwind CSS"] },
    { cat: "Software & Design", items: ["Blender (3D Modeling)", "Unreal Engine", "Inkscape", "Premiere Pro"] },
    { cat: "Core Domains", items: ["Game Physics", "Digital Media Optimization", "Full-Stack Web Architectures"] }
  ];

  // AI Interactive Cover Letter Generator logic
  const handleGenerateCoverLetter = () => {
    if (!jobRole.trim()) return;
    setIsGenerating(true);
    setGeneratedLetter('');
    
    setTimeout(() => {
      const letter = `Dear Hiring Team,\n\nI am thrilled to express my interest in the ${jobRole} position. Combining a strong foundational academic pathway in Computer Science at UTSA with professional milestones—such as orchestrating web systems as a Technical Exhibition Lead and scaling a digital media platform to 75 million views—I offer a uniquely agile technical skillset.\n\nMy proficiency in Python, full-stack frameworks, and 3D design software (Blender/Unreal Engine) positions me to seamlessly contribute to your advanced engineering pipelines. I look forward to discussing how my technical background and creative execution can drive results for your initiatives.\n\nSincerely,\nTrushil Raval`;
      setGeneratedLetter(letter);
      setIsGenerating(false);
    }, 1200);
  };

  return (
    <main className="relative min-h-screen text-slate-100 font-sans overflow-x-hidden selection:bg-indigo-500/30">
      <Scene3D />

      {/* Floating Header */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-white/10 bg-[#030014]/40 px-6 py-4 flex justify-between items-center max-w-6xl mx-auto rounded-b-xl">
        <span className="font-mono text-sm tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-bold">TRUSHIL.DEV</span>
        <div className="flex gap-4 text-xs font-mono">
          {['experience', 'education', 'skills', 'ai-agent'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`uppercase tracking-wider transition-all duration-300 px-3 py-1.5 rounded-md ${activeTab === tab ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30' : 'text-slate-400 hover:text-white'}`}
            >
              {tab.replace('-', ' ')}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
            Trushil Raval
          </h1>
          <p className="mt-4 font-mono text-xs md:text-sm tracking-wider text-indigo-400 uppercase flex items-center justify-center gap-2">
            <Cpu size={14} /> Computer Science & Digital Media Systems Specialist
          </p>
        </motion.div>
      </section>

      {/* Main Content Dashboard */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 min-h-[400px] shadow-2xl relative shadow-purple-950/10">
          <AnimatePresence mode="wait">
            
            {/* Experience Tab */}
            {activeTab === 'experience' && (
              <motion.div key="exp" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} transition={{ duration: 0.3 }} className="space-y-8">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-indigo-300"><Briefcase size={18}/> Professional Engineering & Leadership</h3>
                <div className="space-y-6">
                  {experience.map((item, index) => (
                    <div key={index} className="border-l-2 border-indigo-500/30 pl-4 space-y-1 hover:border-indigo-400 transition-colors">
                      <div className="flex justify-between items-start text-sm">
                        <h4 className="font-bold text-white text-base">{item.role}</h4>
                        <span className="font-mono text-xs text-indigo-400 bg-indigo-950/40 px-2 py-0.5 rounded border border-indigo-500/20">{item.period}</span>
                      </div>
                      <p className="text-xs text-slate-400 font-mono">{item.company}</p>
                      <ul className="list-disc list-inside text-sm text-slate-300 pt-2 space-y-1">
                        {item.highlights.map((h, i) => <li key={i}>{h}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Education Tab */}
            {activeTab === 'education' && (
              <motion.div key="edu" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} transition={{ duration: 0.3 }} className="space-y-8">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-indigo-300"><GraduationCap size={18}/> Academic Foundations</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {education.map((item, index) => (
                    <div key={index} className="bg-white/[0.02] border border-white/5 rounded-xl p-5 hover:bg-white/[0.04] transition-all">
                      <span className="font-mono text-xs text-purple-400">{item.period}</span>
                      <h4 className="font-bold text-lg mt-1">{item.degree}</h4>
                      <p className="text-xs text-slate-400 font-mono mb-2">{item.institution}</p>
                      <p className="text-sm text-slate-300 leading-relaxed">{item.details}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <motion.div key="skills" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} transition={{ duration: 0.3 }} className="space-y-6">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-indigo-300"><Terminal size={18}/> Technical Architecture Matrix</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="bg-white/[0.01] border border-white/5 rounded-xl p-4">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-2">{skill.cat}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item, i) => (
                          <span key={i} className="text-xs px-2.5 py-1 bg-white/[0.04] border border-white/10 rounded-md text-slate-200">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* AI Custom Feature Tab */}
            {activeTab === 'ai-agent' && (
              <motion.div key="ai" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} transition={{ duration: 0.3 }} className="space-y-6">
                <div className="flex items-center gap-2">
                  <Sparkles size={18} className="text-indigo-400 animate-pulse" />
                  <h3 className="text-xl font-semibold text-indigo-300">Interactive AI Context Engine</h3>
                </div>
                <p className="text-sm text-slate-300">
                  Test my portfolio context matching system. Enter a prospective target job title below to watch a live agent parse my experience matrices into a customized alignment overview.
                </p>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={jobRole}
                    onChange={(e) => setJobRole(e.target.value)}
                    placeholder="e.g., Digital Media Specialist, AI Engineer Intern..."
                    className="flex-1 bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-600"
                  />
                  <button
                    onClick={handleGenerateCoverLetter}
                    disabled={isGenerating || !jobRole}
                    className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all"
                  >
                    {isGenerating ? 'Synthesizing...' : <><Send size={14}/> Run</>}
                  </button>
                </div>

                {generatedLetter && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-black/50 border border-emerald-500/20 rounded-lg p-4 mt-4 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed shadow-inner shadow-emerald-950/20">
                    <div className="text-emerald-400 font-semibold mb-2 flex items-center gap-1.5">✓ Alignment Analysis Document Generated:</div>
                    {generatedLetter}
                  </motion.div>
                )}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </section>

      {/* Footer / Connect */}
      <footer className="w-full text-center py-8 border-t border-white/5 bg-black/20 font-mono text-xs text-slate-500 flex flex-col items-center gap-3">
        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-indigo-400 flex items-center gap-1 transition-colors">
            <Github size={14}/> GitHub Repository
          </a>
        </div>
        <p>© 2026 Trushil Raval. Built with strict 3D optimization models.</p>
      </footer>
    </main>
  );
}