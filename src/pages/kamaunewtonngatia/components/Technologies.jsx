import React from "react";
import { BsFiletypeCss } from "react-icons/bs";
import { StyledHeading } from "./Styled/About.styled";
import { StyledContainer } from "./Styled/Technologies.styled";
import technologies from "../data/Technologies";
import { StyledOverallContainer } from "./Styled/Technologies.styled";
function TechnologiesCard({ Icon, name, description }) {
  return (
    <>
      <StyledContainer>
        <h1>{Icon && <Icon />}</h1>
        <h4>{name}</h4>
        <p>{description}</p>
      </StyledContainer>
    </>
  );
}

function Technologies() {
  return (
    <>
      <StyledHeading>Technologies I use</StyledHeading>
      <StyledOverallContainer>
        {technologies.map((tech, index) => (
          <TechnologiesCard
            key={index}
            Icon={tech.icon}
            name={tech.name}
            description={tech.description}
          />
        ))}
      </StyledOverallContainer>
    </>
  );
}

export default Technologies;
