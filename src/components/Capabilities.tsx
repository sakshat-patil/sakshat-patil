import { motion } from 'framer-motion'

const capabilities = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3M12 3v8.25m0 0-3-3m3 3 3-3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    headline: 'Backend and Distributed Systems',
    description:
      'I design scalable architectures and implement distributed system principles utilizing tools like Kafka.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.75 3.104v.13a2.25 2.25 0 0 1-.879 1.765L7.5 5.996l1.371.997A2.25 2.25 0 0 1 9.75 8.76v.13m4.5-5.786v.13a2.25 2.25 0 0 0 .879 1.765L16.5 5.996l-1.371.997A2.25 2.25 0 0 0 14.25 8.76v.13M12 12v8.25M12 12H4.875m7.125 0h7.125" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    headline: 'Artificial Intelligence and Machine Learning',
    description:
      'I build and integrate deep learning models, working with architectures like YOLOv3 to create intelligent applications.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    headline: 'Algorithmic Problem Solving',
    description:
      'I focus on writing optimized, highly efficient code by applying advanced data structures and algorithms.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    headline: 'Full Stack Web Development',
    description:
      'I build comprehensive applications from the ground up, moving seamlessly from database architecture to user interface.',
  },
]

export default function Capabilities() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="text-center mb-14"
      >
        <p className="accent-text text-sm uppercase tracking-widest mb-2">Expertise</p>
        <h2 className="section-heading text-4xl md:text-5xl">things I'm good at</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {capabilities.map((cap, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
            whileHover={{ y: -2 }}
            className="card p-7 hover:border-[#C8A898] hover:shadow-md transition-all duration-300 group"
          >
            <div className="text-terracotta mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
              {cap.icon}
            </div>
            <h3 className="font-serif text-xl text-espresso mb-3 leading-snug">{cap.headline}</h3>
            <p className="font-sans text-sm text-warm-gray leading-relaxed">{cap.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
