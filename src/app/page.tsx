import Navigation from '@/components/Navigation/Navigation'
import AboutMe from '@/components/sections/AboutMe'
import Languages from '@/components/sections/Languages'
import Projects from '@/components/sections/Projects'
import Resume from '@/components/sections/Resume'
import React from 'react'

const Home = () => {
  return (
    <div>
        <Navigation />
        <section id='aboutme'>
            <AboutMe />
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
    </div>
  )
}

export default Home