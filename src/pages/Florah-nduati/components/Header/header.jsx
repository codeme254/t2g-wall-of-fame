import React from "react";
import styled from "styled-components";
import { FaLightbulb } from "react-icons/fa";

const StyledHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: linear-gradient(to right, #e0879e, #fac078);
  border-bottom: 1px solid black;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3); 
  padding-bottom: 1rem;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 10rem;
  justify-content: space-between;
  margin-left:20rem;

  a {
    text-decoration: none;
    color: black;
    font-size: 3rem;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: white;
      background: linear-gradient(to right, #5857cd, #b751c2);
      font-size: 2rem;
      padding: 1rem;
      border-radius: 5px;
    }
  }
`;

const LogoLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: blue;
  margin: 3rem;

  p {
    margin-left: 10px;
    font-size: 30px;
    font-weight: bold;
    justify-content: center;
  }
`;

const HeadingItems = ({ name, logo, label }) => {
  return (
    <div>
      <LogoLabel>
        <p>{name}</p>
        {logo}

        <p>{label}</p>
      </LogoLabel>
      <NavLinks>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contacts">Contacts</a>
      </NavLinks>
    </div>
  );
};

function Heading() {
  return (
    <StyledHeading>
      <HeadingItems
        logo={<FaLightbulb />}
        name="florah nduati"
        label="Portfolio"
      />
    </StyledHeading>
  );
}

export default Heading;
