import {
  TechnologiesCard,
  ImgCard,
  TechnologiesContainer,
  TechnologiesSection
} from "../../styled/Technologies.styled";

import technologies from "../../data/Technologies";

function TechnologiesIllustration({ logo, title, description }) {
  return (
    <TechnologiesCard>
      <ImgCard>
        <img src={logo} alt={`${title} logo`} />
      </ImgCard>
      <h2>{title}</h2>
      <p>{description}</p>
    </TechnologiesCard>
  );
}

function Technologies() {
  return (
    <TechnologiesSection>
      <h2>My Tech Stack & Skills</h2>
      <p>Tools and technologies I use to build innovative and efficient web solutions.</p>

      <TechnologiesContainer>
        {technologies.map((tech, idx) => (
          <TechnologiesIllustration
            key={idx}
            logo={tech.logo}
            title={tech.title}
            description={tech.description}
          />
        ))}
      </TechnologiesContainer>
    </TechnologiesSection>
  );
}

export default Technologies;
