import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 backdrop-blur-md bg-[#FAF7F2]/80 border-b border-[#E8DDD4] shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Monogram */}
        <Link to="/" className="font-serif text-espresso text-2xl font-normal tracking-tight hover:text-terracotta transition-colors duration-200">
          SP
        </Link>

        {/* Right nav */}
        <nav className="flex items-center gap-6">
          <NavLink
            to="/testimonials"
            className={({ isActive }) =>
              `font-sans text-sm font-medium transition-colors duration-200 ${
                isActive ? 'text-terracotta' : 'text-warm-gray hover:text-espresso'
              }`
            }
          >
            Testimonials
          </NavLink>
          <a
            href="mailto:sakshatpatil25@gmail.com"
            className="btn-primary text-sm inline-block"
          >
            Let's Chat
          </a>
        </nav>
      </div>
    </motion.header>
  )
}
