import {Route,Routes,BrowserRouter } from "react-router-dom"
import React     from "react";
import Hero from "./components/Hero/hero";
// import About from "./components/About/About";
// import Skills from "./components/skills/skills";

import Projects from "./components/Projects/Projects";
// import Contact from "./components/Contact/Contact"

import { RiFacebookBoxFill } from "react-icons/ri";
import { FaRoad } from "react-icons/fa";

function Index(){
    return(
        <React.Fragment>
            <Hero/>
            {/* <About/> */}
            {/* <Skills/> */}
            <Projects/>
            {/* <Contact/> */}

        </React.Fragment>   

    );
}

export default Index;
