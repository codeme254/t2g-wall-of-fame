import React from "react";

function Hero() {
  return (
    <div>
      <h1>This is the hero section</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>The about section</h2>
    </div>
  );
}

function Skills() {
  return (
    <div>
      <h2>Skills</h2>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact me</h1>
    </div>
  );
}

function Index() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Index;
