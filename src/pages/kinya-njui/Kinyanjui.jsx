import React from 'react'
import Hero from './component/Hero/Hero'
import About from './component/About/About'
import Technologies from './component/Technologies/Technologies'
import MyProjects from './component/MyProjects/MyProjects'


function Kinyanjui() {
  return (
    <React.Fragment>
      <Hero/>
        <About/>
        <Technologies/>
        <MyProjects/>
    </React.Fragment>
  )
}

export default Kinyanjui