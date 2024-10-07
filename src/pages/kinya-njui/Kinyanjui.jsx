import React from 'react'
import Hero from './component/Hero/Hero'
import About from './component/About/About'
import Technologies from './component/Technologies/Technologies'
import MyProjects from './component/MyProjects/MyProjects'
import Contact from './component/Contact/Contact'


function Kinyanjui() {
  return (
    <React.Fragment>
      <Hero/>
        <About/>
        <Technologies/>
        <MyProjects/>
        <Contact/>
    </React.Fragment>
  )
}

export default Kinyanjui