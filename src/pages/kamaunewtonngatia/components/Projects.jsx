import { StyledHeading } from "./Styled/About.styled";
import Image1 from "../Images/carousel.jpg";
function ProjectsCards({ projectAvatar, projectName, description }) {
  return (
    <>
      <h1>Carousel</h1>
      <img src={Image1} alt="carousel image" />
      <p>This is an image sliding carousel </p>
    </>
  );
}

function Projects() {
  return (
    <>
      <StyledHeading>projects i have worked on</StyledHeading>
      <ProjectsCards />
    </>
  );
}

export default Projects;
