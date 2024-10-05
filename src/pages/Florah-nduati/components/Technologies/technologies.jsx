import React from "react";
import styled from "styled-components";
import { FaHtml5 } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import {FaCss3Alt } from "react-icons/fa";
import { FaJs, } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGit} from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";


const StyledTechnologies = styled.div`
  background: linear-gradient(to right, #a652c4, #d874a9);
  padding: 2rem;
  text-align: center;
  color: white;

  h1{
  text-transform:capitalize;
  color:black;
  }
`;

const TechContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap; 
  margin: 2rem 0;
`;

const TechCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 3rem; 
  margin: 1rem;
  width: calc(25% - 2rem); 
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  h3 {
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    width: calc(50% - 2rem); 
  }

  @media (max-width: 480px) {
    width: 100%; 
  }
`;

function Technologies() {
  return (
    <StyledTechnologies>
      <h1>Technologies I Use</h1>
      <TechContainer>
        <TechCard>
          <FaHtml5 size={50} color="#E34F26" />
          <h3>HTML5</h3>
          <p>The standard markup language for web pages.</p>
        </TechCard>
        <TechCard>
          <FaCss3Alt size={50} color="#1572B6" />
          <h3>CSS3</h3>
          <p>Style sheet language used for describing the presentation of a document.</p>
        </TechCard>
        <TechCard>
          <FaJs size={50} color="#F7DF1E" />
          <h3>JavaScript</h3>
          <p>Programming language for adding interactivity to web pages.</p>
        </TechCard>
        <TechCard>
          <FaReact size={50} color="#61DAFB" />
          <h3>React</h3>
          <p>A JavaScript library for building user interfaces.</p>
        </TechCard>
        <TechCard>
          <FaNodeJs size={50} color="#8CC84B" />
          <h3>Node.js</h3>
          <p>JavaScript runtime built on Chrome's V8 JavaScript engine.</p>
        </TechCard>
        <TechCard>
          <SiVite size={50} color="#646CFF" />
          <h3>Vite.js</h3>
          <p>A fast build tool and development server for modern web projects.</p>
        </TechCard>
        <TechCard>
          <FaGit size={50} color="#F05032" />
          <h3>Git</h3>
          <p>A version control system for tracking changes in code.</p>
        </TechCard>
      </TechContainer>
    </StyledTechnologies>
  );
}

export default Technologies;


