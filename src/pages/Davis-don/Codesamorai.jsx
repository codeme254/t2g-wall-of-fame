import React from 'react'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Work from './Components/Work/Work'
import Contact from './Components/ContactMe/Contact'

function Codesamorai() {
  return (
    <div style={{backgroundColor:'black'}} className='ovearall-code-samurai'>
        <Hero/>
        <About/>
        <Skills/>
        <Work/>
        <Contact/>
        
        </div>
  )
}

export default Codesamorai