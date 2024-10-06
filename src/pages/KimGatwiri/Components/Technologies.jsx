import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaGit,FaFigma } from "react-icons/fa";
import { Section, Title, CardsWrapper, Card } from "./Stylings/TechnologiesStyles";

function Technologies() {
  return (
    <Section id="Technologies">
      <Title>Technologies I Use</Title>
      <CardsWrapper>
        <Card>
          <FaHtml5 size={50} />
          <h3>HTML</h3>
          <p>Building structured and accessible web pages.</p>
        </Card>
        <Card>
          <FaCss3Alt size={50} />
          <h3>CSS</h3>
          <p>Styling responsive and modern web designs.</p>
        </Card>
        <Card>
          <FaReact size={50} />
          <h3>React</h3>
          <p>Developing dynamic user interfaces for web apps.</p>
        </Card>
        <Card>
          <FaJs size={50} />
          <h3>JavaScript</h3>
          <p>Programming language for web interactivity</p>
        </Card>
        <Card>
          <FaGit size={50} />
          <h3>Git</h3>
          <p>Version control and team collaboration on projects.</p>
        </Card>
        <Card>
          <FaFigma size={50} />
          <h3>Figma</h3>
          <p>Design tool for UI design</p>
        </Card>
      </CardsWrapper>
    </Section>
  );
}

export default Technologies;
