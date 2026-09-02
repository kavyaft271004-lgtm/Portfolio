import { useState } from 'react'
import { useLenis } from '../hooks/useLenis'
import Loader from '../components/loader/Loader'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Skills from '../components/skills/Skills'
import Experience from '../components/experience/Experience'
import Projects from '../components/projects/Projects'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import SectionDivider from '../components/ui/SectionDivider'

function Home() {
  const [loaded, setLoaded] = useState(false)
  useLenis()

  return (
    <>
      <Loader onFinish={() => setLoaded(true)} />
      {loaded && (
        <>
          <Navbar />
          <Hero />
          <About />
          <SectionDivider />
          <Skills />
          <SectionDivider flip />
          <Experience />
          <SectionDivider />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </>
  )
}

export default Home
