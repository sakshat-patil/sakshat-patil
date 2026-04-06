import Hero from '../components/Hero'
import Timeline from '../components/Timeline'
import Projects from '../components/Projects'
import Capabilities from '../components/Capabilities'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="h-px bg-gradient-to-r from-transparent via-[#E8DDD4] to-transparent" />
      <Timeline />
      <div className="h-px bg-gradient-to-r from-transparent via-[#E8DDD4] to-transparent" />
      <Projects />
      <div className="h-px bg-gradient-to-r from-transparent via-[#E8DDD4] to-transparent" />
      <Capabilities />
      <Footer />
    </main>
  )
}
