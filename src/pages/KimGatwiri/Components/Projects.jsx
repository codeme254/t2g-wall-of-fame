import React from 'react';
import { Section, Title, CardsWrapper, Card } from './Stylings/ProjectStyles';

function Projects() {
  const projects = [
    {
      title: "Rentals Website",
      description: "Brief description of the project.",
      technologies: ["HTML", "CSS", "JavaScript"],
      
      liveUrl: "https://kimgatwiri.github.io/Urban-Haven-Apartments/",
      repoUrl: "https://github.com/KimGatwiri/Urban-Haven-Apartments"
    },
    {
      title: "TechClub Website",
      description: "Brief description of the project.",
      technologies: ["React"],
     
      liveUrl: "https://mut-club-eta.vercel.app/",
      repoUrl: "https://github.com/KimGatwiri/MUT-CLUB"
    },
    {
      title: "Game",
      description: "Brief description of the project.",
      technologies: ["React"],
     
      liveUrl: "https://kimgatwiri.github.io/Rock-Paper-Scissors/",
      repoUrl: "https://github.com/KimGatwiri/Rock-Paper-Scissors"
    },
    {
      title: "Slider-Show",
      description: "Brief description of the project.",
      technologies: ["Html.css.Javascript"],
     
      liveUrl: "https://kimgatwiri.github.io/slider-show/",
      repoUrl: "  https://github.com/KimGatwiri/slider-show"
    },
   
  ];

  return (
    <Section id="Projects">
      <Title>My Projects</Title>
      <CardsWrapper>
        {projects.map((project, index) => (
          <Card key={index}>
            
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>Technologies: {project.technologies.join(", ")}</p>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">View Live</a>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">View Code</a>
          </Card>
        ))}
      </CardsWrapper>
    </Section>
  );
}

export default Projects;
