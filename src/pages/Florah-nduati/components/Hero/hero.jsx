import React from "react";
import styled from "styled-components";
import { FaGithubSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import image from "../../assets/me.jpeg";
import image2 from "../../assets/me2.jpeg"

const StyledContainer = styled.div`
  display: flex;
  background: linear-gradient(to right, #ce5db8, #eea689);
  flex-direction: row; 
  align-items: center; 
  height: 100vh; 
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  text-align: center;

  h1 {
    margin-bottom: 3rem; 
  }

  h2 {
    margin-bottom: 3rem; 
  }

  h3 {
    margin-bottom: 3rem; 
  }

  h4 {
    margin-bottom: 3rem; 
  }
`;


const Button = styled.button`
  color: white;
  background: linear-gradient(to right, #5857cd, #b751c2);
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #555;
  }
`;

const Social = styled.div`
  margin-top: 20px;
  text-align: center;


  .social-icons {
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 4rem;
  }

  a {
    color: #5857cd;
    font-size: 3rem;
    align-items:center;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.9); 
    transition: color 0.3s;

    &:hover {
      color: #ff6600;
      font-size:4rem;
    }
  }
`;

const Profile = styled.div`
  width: 50%;
  gap:2rem;
  margin:3rem;
  height: 50%; 
  display: flex; 
  flex-direction: row; 
  
  img {
    width: 98%; 
    height: 98%; 
    object-fit: cover; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9); 
    border-radius: 10px; 
  }
`;


const HeroComponent = ({ greetings, name, skill, description, btn }) => {
  return (
    <StyledContainer>
      <Texts>
        <h3>{greetings}</h3>
        <h1>{name}</h1>
        <h2>{skill}</h2>
        <h4>{description}</h4>
        <Button>{btn}</Button>
        <Social>
          <p>Check out my social profiles:</p>
          <div className="social-icons">
            <a href="https://github.com/florah-nduati" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare />
            </a>
            <a href="https://linkedin.com/in/florah-nduati-ab14b724b/" target="_blank" rel="noopener noreferrer">
              <BsLinkedin />
            </a>
            <a href="https://instagram.com/pflozzie/" target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare />
            </a>
          </div>
        </Social>
      </Texts>
      <Profile>
        <img src={image} alt="my image" />
        <img src={image2} alt="my image" />
      </Profile>
    </StyledContainer>
  );
};

function Hero2() {
  return (
    <HeroComponent
      greetings="Hello there 👋"
      name="I am Florah Nduati"
      skill="Web Developer"
      description="Crafting user-friendly and aesthetic UI designs is not just my profession, it's my passion."
      btn="Let's talk"
    />
  );
}

export default Hero2;
