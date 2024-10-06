import React from 'react'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'

function Codesamorai() {
  return (
    <div style={{backgroundColor:'black'}} className='ovearall-code-samurai'>
        <Hero/>
        <About/>
        <Skills/>
        
        </div>
  )
}

export default Codesamorai