import { StyledHeading } from "./Styled/About.styled";
import Image1 from "../Images/carousel.jpg";
import { StyledCard } from "./Styled/Projects.styled";
import projects from "../data/Projects";
import { StyledOverallContainer } from "./Styled/Technologies.styled";

function ProjectsCards({ projectAvatar, projectName, description }) {
  return (
    <StyledCard>
      <h1>{projectName}</h1>
      <img src={projectAvatar} alt={projectName} />
      <p>{description}</p>
    </StyledCard>
  );
}

function Projects() {
  return (
    <>
      <StyledHeading>Projects I Have Worked On</StyledHeading>
      <StyledOverallContainer>
        {projects.map((project, index) => (
          <ProjectsCards
            key={index}
            projectAvatar={project.projectAvatar}
            projectName={project.projectName}
            description={project.description}
          />
        ))}
      </StyledOverallContainer>
    </>
  );
}

export default Projects;
