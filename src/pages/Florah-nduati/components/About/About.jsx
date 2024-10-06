import React from "react";
import image3 from "../../assets/about.jpg";
import { StyledAbout, Texts, Profile } from "../styled/About.styled";

function About() {
  return (
    <StyledAbout id="about">
      <Texts>
        <h1>About Me</h1>
        <p>
          I'm a front-end developer that learned everything on my own. I
          specialize in creating dynamic, accessible websites that work on any
          device. Furthermore, I regularly create creative solutions that
          improve user experiences. I am proficient in React.js, JavaScript,
          HTML5, and CSS. I guarantee efficient code management and
          communication thanks to my knowledge with Git version control.
          Likewise, I'm also skilled at developing apps using mini program
          studio frameworks and exceeding client expectations with my
          high-caliber solutions.
        </p>
      </Texts>
      <Profile>
        <img src={image3} alt="about image" />
      </Profile>
    </StyledAbout>
  );
}

export default About;
