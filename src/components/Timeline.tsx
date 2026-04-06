import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

const entries = [
  {
    year: 'Summer 2026',
    role: 'Incoming Software Engineering Intern',
    company: 'Intuit',
    description: 'Preparing to join the engineering team for a summer internship.',
  },
  {
    year: '2025–Present',
    role: 'Graduate Student',
    company: 'San Jose State University',
    description:
      'Pursuing an MS in Software Engineering. Enrolled in coursework including Deep Learning and Distributed Systems while working part time as a campus barista.',
  },
  {
    year: '2022–2025',
    role: 'Software Engineer',
    company: 'Reliance Jio',
    description:
      'Developed and maintained software solutions for millions of users, focusing on backend architecture and system optimization.',
  },
  {
    year: '2018–2022',
    role: 'Undergraduate Student',
    company: 'University of Mumbai',
    description: 'Earned a Bachelor of Engineering in Electronics and Telecommunications.',
  },
]

function TimelineCard({
  entry,
  index,
}: {
  entry: (typeof entries)[0]
  index: number
}) {
  const isLeft = index % 2 === 0
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
      className={`relative flex w-full ${isLeft ? 'lg:justify-start' : 'lg:justify-end'} justify-start`}
    >
      <div className="w-full lg:w-[44%] card p-6 hover:shadow-md hover:-translate-y-0.5 hover:border-[#C8A898] transition-all duration-300">
        <p className="font-serif text-3xl text-terracotta mb-1">{entry.year}</p>
        <p className="font-sans font-semibold text-espresso text-base mb-0.5">{entry.role}</p>
        <p className="font-sans text-sm text-terracotta font-medium mb-3">{entry.company}</p>
        <p className="font-sans text-sm text-warm-gray leading-relaxed">{entry.description}</p>
      </div>
    </motion.div>
  )
}

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'end 0.1'],
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const lineHeight = useTransform(scaleY, [0, 1], ['0%', '100%'])

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="text-center mb-16"
      >
        <p className="accent-text text-sm uppercase tracking-widest mb-2">Career Journey</p>
        <h2 className="section-heading text-4xl md:text-5xl">where I've been</h2>
      </motion.div>

      <div ref={containerRef} className="relative">
        {/* Vertical line — desktop: center, mobile: left */}
        <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-[#E8DDD4]" />
        {/* Animated line fill */}
        <motion.div
          className="absolute left-4 lg:left-1/2 top-0 w-px -translate-x-1/2 origin-top timeline-line"
          style={{ height: lineHeight }}
        />

        <div className="space-y-10 pl-12 lg:pl-0">
          {entries.map((entry, i) => (
            <div key={i} className="relative">
              {/* Node dot */}
              <div className="absolute left-[-2.15rem] lg:left-1/2 top-7 w-3 h-3 rounded-full bg-terracotta border-2 border-cream -translate-x-1/2 z-10" />
              <TimelineCard entry={entry} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
