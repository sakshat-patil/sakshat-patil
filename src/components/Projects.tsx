import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    title: 'Record Based Medical Diagnostic Assistant',
    duration: 'Spring 2026',
    client: 'San Jose State University',
    challenge:
      'Analyzing complex medical data efficiently to aid in accurate healthcare evaluations.',
    solution:
      'Collaborating with a team to build a diagnostic assistant using deep learning models and robust data processing pipelines.',
    stack: ['Python', 'Machine Learning', 'Data Warehousing'],
    scope: [
      'Designed the project scope and data integration strategy',
      'Implemented machine learning models for diagnostics',
      'Established data sources and team member workflows',
    ],
  },
  {
    title: 'Safeguard-AI',
    duration: 'Hackathon Project',
    client: 'Independent Development',
    challenge: 'Automating the review and security analysis of video feeds.',
    solution: 'Built a comprehensive video analysis tool utilizing modern AI architectures.',
    stack: ['AI/ML', 'Computer Vision', 'Python'],
    scope: [
      'Developed video processing pipelines',
      'Integrated AI models for automated analysis',
    ],
  },
  {
    title: 'Campus Marketplace',
    duration: 'Coursework Project',
    client: 'Full Stack Application',
    challenge: 'Creating a centralized hub for university students to trade goods and services.',
    solution: 'Developed a full stack web application from database design to the user interface.',
    stack: ['Web Technologies', 'Database Management', 'Frontend Frameworks'],
    scope: [
      'Architected the database schema',
      'Built secure user authentication and listing workflows',
    ],
  },
  {
    title: 'GitCast & WebBrain',
    duration: 'Ongoing Concepts',
    client: 'Innovation and Tools',
    challenge:
      'Making code repositories more accessible and exploring intelligent web interactions.',
    solution:
      'Prototyped a tool to convert GitHub repositories into podcasts and mapped out architecture for a conceptual AI project.',
    stack: ['API Integration', 'System Design', 'LLMs'],
    scope: [
      'Drafted architecture for WebBrain',
      'Built repository parsing logic for GitCast',
    ],
  },
]

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.3 }}
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      className="text-[#B0A49A] flex-shrink-0"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  )
}

function ProjectCard({ project, isOpen, onToggle, isLast }: {
  project: typeof projects[0]
  isOpen: boolean
  onToggle: () => void
  isLast: boolean
}) {
  return (
    <div className={!isLast ? 'border-b border-[#E8DDD4]' : ''}>
      {/* Header row */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <div className="flex flex-col min-w-0">
          <h3 className={`font-serif text-xl md:text-2xl transition-colors duration-200 ${isOpen ? 'text-terracotta' : 'text-espresso group-hover:text-terracotta'}`}>
            {project.title}
          </h3>
          <span className="font-sans text-xs text-[#B0A49A] mt-0.5">{project.duration}</span>
        </div>
        <ChevronIcon open={isOpen} />
      </button>

      {/* Expanded content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-8 grid md:grid-cols-3 gap-6">
              {/* Main content */}
              <div className="md:col-span-2 space-y-5">
                <p className="accent-text text-sm">{project.client}</p>

                <div>
                  <p className="font-sans font-semibold text-espresso text-sm mb-2">The challenge</p>
                  <p className="font-sans text-sm text-warm-gray leading-relaxed">{project.challenge}</p>
                </div>

                <div>
                  <p className="font-sans font-semibold text-espresso text-sm mb-2">What I did</p>
                  <p className="font-sans text-sm text-warm-gray leading-relaxed">{project.solution}</p>
                </div>

                <div>
                  <p className="font-sans font-semibold text-espresso text-sm mb-2">Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((t) => (
                      <span key={t} className="text-xs font-sans bg-[#F0EBE3] text-warm-gray border border-[#E8DDD4] px-3 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Scope sidebar */}
              <div className="bg-[#FAF7F2] border border-[#E8DDD4] rounded-b-xl p-4 pt-5 self-start">
                <p className="font-sans font-semibold text-espresso text-sm mb-3">My role</p>
                <ul className="space-y-2">
                  {project.scope.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-warm-gray font-sans leading-relaxed">
                      <span className="text-terracotta mt-1 flex-shrink-0">▸</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="text-center mb-14"
      >
        <p className="accent-text text-sm uppercase tracking-widest mb-2">Selected Work</p>
        <h2 className="section-heading text-4xl md:text-5xl">things I've built</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        className="border-t border-[#E8DDD4]"
      >
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            project={project}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            isLast={i === projects.length - 1}
          />
        ))}
      </motion.div>
    </section>
  )
}
