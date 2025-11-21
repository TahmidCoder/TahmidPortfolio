import React, { useEffect } from 'react'
import Home from './components/Home'
import Nav from './components/Nav'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
      <div className=''>
        <div>
          <Nav />
        </div>
        <section id='home'>
          <Home />
        </section>
        <section id='about'>
          <About />
        </section>
        <section id='projects'>
          <Projects />
        </section>
        <section id='contact'>
          <Contact />
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
  )
}

export default App