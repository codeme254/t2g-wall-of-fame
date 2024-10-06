import React from 'react'
import Hero from './component/Hero/Hero'
import About from './component/About/About'
import Technologies from './component/Technologies/Technologies'

function Kinyanjui() {
  return (
    <React.Fragment>
      <Hero/>
        <About/>
        <Technologies/>
    </React.Fragment>
  )
}

export default Kinyanjui