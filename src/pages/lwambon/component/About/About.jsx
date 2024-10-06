import AboutContent from "../../styled/About.styled";
import AboutImage from "../../../lwambon/assets/img1.png";

function About() {
  return (
    <AboutContent id="About">
      <div className="about-me">
        <h2>about me</h2>
      </div>
      <div className="about-content-area">
        <p>
          I am a passionate software developer and a recent graduate of Muranga
          University of Technology, where I earned my degree in Computer
          Science,. My technical expertise includes Python, React, Vite.js,
          HTML, CSS, and JavaScript, enabling me to build dynamic and responsive
          web applications. I have a strong interest in front-end development,
          creating user-friendly interfaces that are both visually appealing and
          efficient. I am also committed to continuous learning and staying
          updated on the latest industry trends and technologies. My goal is to
          leverage my skills to develop innovative solutions that improve user
          experiences and address real-world challenges.
        </p>
        <div className="image-about">
          <img src={AboutImage} alt="" />
        </div>
      </div>
    </AboutContent>
  );
}

export default About;
