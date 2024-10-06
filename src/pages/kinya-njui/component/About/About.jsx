import React from "react";
import { AboutSection, AboutContainer, AboutText, AboutImage } from "../../styled/About.styled";
import aboutImage from "../../Images/About.jpg"; // Image import

function About() {
  return (
    <AboutSection id="about-me">
      <AboutContainer>
        <AboutText>
          <h2>About Me</h2>
          <p>
          A dedicated and enthusiastic software engineer, I am currently honing my skills in full-stack development with a keen interest in both front-end and back-end technologies. My journey in the tech world began with a fascination for how digital solutions can solve real-world problems, and I am deeply committed to learning modern frameworks and programming languages such as React, Node.js, and Python. I enjoy tackling challenges that push me to grow and improve, as I believe that each obstacle is an opportunity for personal and professional development.
          
          I am passionate about building solutions that are not only functional but also optimized for performance and scalability, ensuring that users have the best experience possible. While still expanding my expertise, I bring creativity and a strong problem-solving mindset to every project I undertake. I thrive in collaborative environments where I can learn from others while also contributing my own insights and ideas.
          
          I believe in writing clean, maintainable code, which not only improves the longevity of a project but also facilitates teamwork and future enhancements. My journey in tech is fueled by curiosity and a steadfast commitment to continuous improvement, and I am eager to take on new opportunities that allow me to grow and make a positive impact in the tech community. I look forward to connecting with like-minded individuals and working on projects that challenge the status quo and drive innovation.
          </p>
        </AboutText>
        <AboutImage>
          <img src={aboutImage} alt="About kinyanjui" />
        </AboutImage>
      </AboutContainer>
    </AboutSection>
  );
}

export default About;
