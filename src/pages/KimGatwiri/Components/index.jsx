import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import Navigation from "./Navigation";
import Hero from '../Components/Hero';
import About from '../Components/About';
import Technologies from '../Components/Technologies';
import Projects from './Projects.jsx';
import Contact from "./contact.jsx";

import styled from'styled-components';

function WallOfFame(){
return(
    <>
   
    <Navigation/>
    <Hero />
    <About/>
    
    <Technologies/>
    <Projects />
    <Contact/>

    
    
    </>
)
}

export  default WallOfFame;