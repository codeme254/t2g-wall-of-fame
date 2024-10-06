import styled from "styled-components";
import heroimage from '../Assets/heroimage.jpeg';

const Herosection = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  overflow: hidden; 

  @media (max-width: 59.5em) {
    flex-direction: column; 
    align-items: center; 
    height: auto; 
    padding: 1rem; 
  }
`;

const Heroimage = styled.img`
  width: 350px;             
  height: 400px;
  border-radius: 15%; 

  @media (max-width: 59.5em) {
    width: 200px;
    height: 250px;
  }
`;

const Herotext = styled.p`
  max-width: 600px;
  color: white;
  margin-bottom: 1.5rem;
  font-size: 2rem;

  @media (max-width: 59.5em) {
    text-align: center;
  }
`;

const Herobutton = styled.a`
  background-color: #f5efff;
  color: #282c34;
  border: none;
  border-radius: 30px; 
  padding: 1rem 2rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #7E60BF;
    color: #1f1f1f;
    transform: scale(1.15); 
  }
`;

const Herocontent = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center;
`;

function Hero() {
  return (
    <>
      <Herosection>
        <Herocontent>
          <div>
            <Herotext><strong>Hello,<br/> I'm Nina Namalwa,</strong><br /> a web developer passionate about building great websites.</Herotext>
          </div>
          <Herobutton href="#contact">Contact me</Herobutton>
        </Herocontent>

        <div>
          <Heroimage src={heroimage} alt="codingimage" />
        </div>
      </Herosection>
    </>
  );
}

export default Hero;
