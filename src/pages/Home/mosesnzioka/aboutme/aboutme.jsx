import Title from "../title/title";
import './about.css'
const AboutMe = () => {
    return (
      <section className="about-me">
        <Title maintitle="about Me"/>
        <div className="about-description">
        <h2>About Me</h2>
        <p>
          Hi, I'm a passionate software engineer specializing in web development. 
          I love solving real-world problems through code and have experience in full-stack development using JavaScript, React, and Node.js.
          My goal is to continue learning and contributing to innovative projects that make a difference.
        </p>

        </div>
      
        
      </section>
    );
  };
  
  export default AboutMe;