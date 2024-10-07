import React from 'react';
import { Link } from "react-router-dom";
import projects from '../../data/MyProject'; 
import {
  ProjectContainer,
  ProjectCard,
  ProjectImageContainer,
  ProjectSection,
  ProjectLinksContainer,
  ProjectLink,
  Title,
  Description,
} from "../../styled/MyPojects.styled";

const ProjectLinks = ({ liveUrl, githubUrl }) => (
  <ProjectLinksContainer>
    {liveUrl && (
      <ProjectLink to={liveUrl} target="_blank" rel="noopener noreferrer">
        Live URL
      </ProjectLink>
    )}
    {githubUrl && (
      <ProjectLink to={githubUrl} target="_blank" rel="noopener noreferrer">
        GitHub URL
      </ProjectLink>
    )}
  </ProjectLinksContainer>
);

const Project = ({ image, title, description, links }) => {
  return (
    <ProjectCard>
      <ProjectImageContainer>
        <img src={image} alt={title} />
      </ProjectImageContainer>
      <h3>{title}</h3>
      <p>{description}</p>
      <ProjectLinks liveUrl={links.liveUrl} githubUrl={links.githubUrl} />
    </ProjectCard>
  );
};

const Projects = () => {
  return (
    <ProjectSection>
      <Title>My Projects</Title>
      <Description>
        Explore my recent projects showcasing innovative web solutions and creative designs I've developed.
      </Description>
      <ProjectContainer>
        {projects.map((project, index) => (
          <Project
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            links={project.links}
          />
        ))}
      </ProjectContainer>
    </ProjectSection>
  );
};

export default Projects;
