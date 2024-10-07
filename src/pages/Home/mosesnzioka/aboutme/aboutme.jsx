import Title from "../title/title";
import "./about.css";
import Carousel from "../carousel/carousel";

const AboutMe = () => {
  return (
    <section className="about-me">
      <Title maintitle="about Me" />
      <div className="aboutme-side">
        <div className="about-description">
          <h2>About Me</h2>
          <p>
            Hi, I'm a passionate software engineer specializing in web
            development. I love solving real-world problems through code and
            have experience in full-stack development using JavaScript, React,
            and Node.js. My goal is to continue learning and contributing to
            innovative projects that make a difference. With extensive
            experience in technologies like React and CSS, I build responsive,
            user-friendly web applications that deliver seamless user
            experiences.My journey in software engineering has been driven by a
            passion for continuous learning and innovation. I enjoy tackling
            complex challenges and transforming ideas into functional, efficient
            solutions.
          </p>
        </div>
        <div className="carousel-container">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
