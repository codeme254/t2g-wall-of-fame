import Project1Image from "../../../lwambon/assets/project11.png";
import Project2Image from "../../../lwambon/assets/project2.webp";
import Project4Image from "../../../lwambon/assets/project4.webp";
import Project3Image from "../../../lwambon/assets/project6.webp";
import Project7Image from "../../../lwambon/assets/project7.webp";
import {
  ProjectContainer,
  ProjectItems,
  ProjectCards,
} from "../../styled/Project.styled";

function Project() {
  return (
    <ProjectContainer>
      <h2>my projects</h2>
      <ProjectCards>
        <ProjectItems>
          <img src={Project1Image} alt="vowel recognition model" />
          <h4>vowel recognition model</h4>
          <p>
            I developed a vowel recognition model that accurately identifies
            vowel sounds from audio recordings using machine learning. This
            project enhanced my skills in speech processing, feature extraction,
            and model optimization.
          </p>
          <link rel="stylesheet" href="" />
        </ProjectItems>

        <ProjectItems>
          <img
            src={Project2Image}
            alt="Murang\'a university tech club website"
          />
          <h4>Muranga university tech club website</h4>
          <p>
            I created a responsive website for Muranga University Tech Club
            using React and CSS, showcasing events, tracks, and activities
            effectively.
          </p>
        </ProjectItems>

        <ProjectItems>
          <img src={Project3Image} alt="rock paper scissor game" />
          <h4>rock paper scissor game</h4>
          <p>
            I built a Rock-Paper-Scissors game built using React, JavaScript,
            HTML, and CSS allows users to play against a computer opponent.
          </p>
        </ProjectItems>

        <ProjectItems>
          <img src={Project4Image} alt="urban haven website" />
          <h4>urban haven website</h4>
          <p>
            Urban Haven website, built using HTML and CSS, showcases modern
            urban living spaces with a clean, responsive, and stylish design.
          </p>
        </ProjectItems>

        <ProjectItems>
          <img src={Project7Image} alt="todo list app" />
          <h4>todo list app</h4>
          <p>
            A To-Do List application developed using HTML, CSS, and JavaScript
            allows users to add, remove, and manage daily tasks efficiently.
          </p>
        </ProjectItems>
      </ProjectCards>
    </ProjectContainer>
  );
}

export default Project;
