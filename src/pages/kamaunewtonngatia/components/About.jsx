import Newton from "../Images/newton.jpg";
import { StyledHeading } from "./Styled/About.styled";
import { StyledDiv } from "./Styled/About.styled";
function About() {
  return (
    <>
      <StyledHeading>About me</StyledHeading>
      <StyledDiv>
        <p>
          As a software developer, I am passionate about creating intuitive and
          efficient digital solutions that enhance user experiences. With a
          solid foundation in Mathematics and Computer Science, I specialize in
          developing dynamic web applications using modern technologies like
          React, JavaScript, HTML, and CSS. I have a keen eye for detail,
          ensuring that every line of code is clean, scalable, and optimized for
          performance. Driven by curiosity and a desire to innovate, I thrive in
          solving complex problems and turning ideas into functional,
          high-quality software. I enjoy collaborating with teams and staying
          up-to-date with the latest industry trends to continuously improve my
          skills. Whether it's front-end development or integrating back-end
          services, I'm committed to delivering impactful results that exceed
          expectations.
        </p>
        <img src={Newton} alt="Kamau Newton" />
      </StyledDiv>
    </>
  );
}

export default About;
