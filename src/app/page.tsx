import Navigation from '../components/ui/Navigation'
import Home from '../components/sections/Home'
import Contact from '../components/sections/Contact'
import Languages from '../components/sections/Languages'
import Projects from '../components/sections/Projects'
import Resume from '../components/sections/Resume'
import React from 'react'

const Page = () => {
  return (
    <div>
        <Navigation />
        <section id='home'>
            <Home />
        </section>
        <section>
          <Languages />
        </section>
        <section id='projects'>
            <Projects />
        </section>
        <section id='resume'>
            <Resume />
        </section>
        <section id='contact'>
          <Contact />
        </section>
    </div>
  )
}

export default Page