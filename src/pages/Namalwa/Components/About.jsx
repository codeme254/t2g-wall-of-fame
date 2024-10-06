import styled from "styled-components";
import Aboutimg from '../Assets/Aboutimg.jpeg';

const Aboutsection = styled.div`
  margin-top: 5rem;
  padding: 0 2rem;
`;

const Abouttitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Aboutimage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
 

  @media (max-width: 59.5em) {
    width: 200px; 
    height: 200px;
    margin-bottom: 20px;
    margin-right: 0; 
  }
`;

const Aboutcontainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  flex-wrap: wrap;
  padding: 0 1rem; 
`;

const Textsection = styled.div`
  font-family: 'Arial', sans-serif;
  font-size: 1.2rem;
  line-height: 1.6;
  color: #333;
  margin: 2rem auto;
  padding: 1.5rem;
  background: #B7B7B7;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  text-align: center;

  @media (max-width: 59.5em) {
    text-align: center;
  }
`;

const Abouttext = styled.p`
  letter-spacing: 0.1rem;
  line-height: 1.6rem;
  font-size: 1.5rem;
  color:black;
`;

function About() {
  return (
    <Aboutsection id="about">
      <Abouttitle>About Me</Abouttitle>
      <Aboutcontainer>
        <div>
          <Aboutimage src={Aboutimg} alt="codingimage" />
        </div>
        <Textsection>
          <Abouttext>
            Hello! I’m Sifuna Nina Namalwa, a passionate Web Developer based in Murang'a. I love creating intuitive and dynamic web applications that provide excellent user experiences. I hold a degree in Bachelor of Science in Information Technology from Cooperative University of Kenya, where I developed a strong foundation in Web Development. Over the past months, I’ve had the privilege of learning with Jitu on projects involving Web Development.
          </Abouttext>
        </Textsection>
      </Aboutcontainer>
    </Aboutsection>
  );
}

export default About;
