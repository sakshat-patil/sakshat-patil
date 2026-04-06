import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.15 },
  }),
}

export default function Hero() {
  return (
    <section className="min-h-screen pt-28 pb-20 px-6 max-w-6xl mx-auto flex items-center">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
        {/* Left: Text */}
        <div className="flex-1 lg:flex-[3]">
          <motion.h1
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-espresso leading-tight mb-5"
          >
            Sakshat Patil
          </motion.h1>

          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-sans text-xl md:text-2xl font-semibold text-terracotta leading-snug mb-7"
          >
            I like building things that scale.
          </motion.p>

          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="space-y-4 text-warm-gray font-sans text-base md:text-lg leading-relaxed max-w-xl"
          >
            <p>
              I am a software engineer specializing in backend development, distributed systems, and machine learning. I am currently pursuing my Master of Science in Software Engineering at San Jose State University and will be joining Intuit as a Software Engineering Intern in Summer 2026.
            </p>
            <p>
              My background spans full stack development, system architecture, and AI integration. I bring both theoretical knowledge from my advanced coursework and practical execution from my time as a Software Engineer at Reliance Jio, ensuring that applications are built for performance and scale.
            </p>
            <p>
              Whether you need robust backend infrastructure, a deep learning model integration, or a dedicated engineer for your next complex project, I am ready to build it.
            </p>
          </motion.div>
        </div>

        {/* Right: Hexagon Photo */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex-1 lg:flex-[2] flex justify-center items-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Accent hexagon behind */}
            <div
              className="absolute inset-0 scale-110 hex-clip"
              style={{ backgroundColor: 'rgba(212, 106, 58, 0.25)' }}
            />
            {/* Photo hexagon */}
            <div className="absolute inset-0 hex-clip overflow-hidden">
              <img
                src="/src/images/1742358972967.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
