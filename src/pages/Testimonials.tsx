import { motion } from 'framer-motion'
import Footer from '../components/Footer'

const testimonials = [
  {
    name: 'Shubham Jangid',
    title: 'Senior Developer',
    context: 'Senior colleague at Reliance Jio',
    quote:
      "Sakshat is an asset for any organization. He is a self-motivated, energetic and passionate individual. He loves challenges and is a go-getter. As a brilliant and versatile software engineer, he brings strong command of Data Structures, Algorithms, and programming proficiency, with deep expertise in backend development, building distributed and scalable systems, and optimizing performance. His technical skills are exceptional, including proficiency in backend development, microservices architecture, and database management. Sakshat demonstrates a knack for innovation and interest for learning, consistently delivering creative solutions to complex problems while quickly grasping new concepts. Beyond his technical abilities, he excels as a team player and natural leader who proactively helps others, making him an invaluable asset for any engineering team and organization.",
    date: 'August 22, 2025',
    initials: 'SJ',
  },
  {
    name: 'Sudeep Khandekar',
    title: 'CS @ GWU · Software Developer',
    context: 'Colleague at Reliance Jio · studied together at University of Mumbai',
    quote:
      "I had the pleasure of studying alongside Sakshat Patil during our undergraduate years, and we began our professional journeys together at Reliance Jio. From the start, it was clear that Sakshat possesses a sharp analytical mind, capable of crafting elegant and efficient software solutions. His expertise in software development, particularly with Java, Python, and data-driven projects, is truly impressive. Additionally, his deep understanding of AI and Cloud technologies enables him to thrive in complex domains and deliver innovative solutions. Sakshat has been my go-to person whenever I've hit a roadblock in coding or software design, and he always offers insightful perspectives that help unlock new approaches. Beyond his technical skills, Sakshat has also been an invaluable friend, offering support not only in professional matters but also in personal ones. I wholeheartedly recommend Sakshat for his exceptional leadership, communication skills, and analytical mindset.",
    date: 'September 15, 2024',
    initials: 'SK',
  },
]

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.1 }}
      className="card p-8 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-md hover:border-[#C8A898] transition-all duration-300"
    >
      {/* Decorative quote marks */}
      <span
        className="absolute top-3 right-5 font-serif text-8xl leading-none pointer-events-none select-none"
        style={{ color: 'rgba(212, 106, 58, 0.08)' }}
        aria-hidden="true"
      >
        "
      </span>

      {/* Header: avatar + name */}
      <div className="flex items-start gap-4 mb-6">
        <div
          className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-sans font-semibold text-white text-sm"
          style={{ backgroundColor: '#D46A3A' }}
        >
          {t.initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-sans font-semibold text-espresso text-base">{t.name}</p>
          <p className="font-sans text-sm text-terracotta">{t.title}</p>
          <p className="font-sans text-xs text-[#B0A49A] mt-0.5">{t.context}</p>
        </div>
      </div>

      {/* Quote */}
      <blockquote className="border-l-2 border-terracotta pl-5">
        <p className="font-sans text-warm-gray leading-relaxed text-base italic">"{t.quote}"</p>
      </blockquote>

      {/* Footer row: date + LinkedIn badge */}
      <div className="flex items-center justify-between mt-5">
        <a
          href="https://www.linkedin.com/in/sakshatpatil/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-[#B0A49A] hover:text-terracotta transition-colors duration-200"
        >
          <LinkedInIcon />
          <span>Via LinkedIn</span>
        </a>
        <p className="font-sans text-xs text-[#B0A49A]">{t.date}</p>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  return (
    <>
      <main className="pt-32 pb-12 px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <p className="accent-text text-sm uppercase tracking-widest mb-2">What Others Say</p>
          <h1 className="section-heading text-4xl md:text-5xl">Testimonials</h1>
        </motion.div>

        <div className="space-y-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} index={i} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
