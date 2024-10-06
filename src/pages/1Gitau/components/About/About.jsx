import graduatioImg from "../Images/graduation.png";
import {
  AboutContainer,
  AboutHeading,
  AboutContent,
  AboutText,
  AboutImage,
} from "../Styled/About";

function About() {
  return (
    <AboutContainer>
      <AboutHeading>About Me</AboutHeading>
      <AboutContent>
        <AboutImage src={graduatioImg} alt="gitau photo" />

        <AboutText>
          I am a software engineer with a BSc in IT from Murang'a University,
          where I recently graduated. I have a strong passion for
          having developed skills in JavaScript, HTML, and CSS. My
          expertise includes building interactive websites, such as a recent
          project for Murang'a University Tech Club, where I am designing pages
          using React.  In addition to my technical
          skills, I have worked on improving my soft skills through mock
          interviews and collaborative sessions.
        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
}

export default About;
