import styled from "styled-components";
import { ImHtmlFive2 } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const TechnologySection = styled.div`
  margin-top: 5rem;
  padding: 0 2rem; 
`;

const TechnologyTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const TechnologyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
`;

const TechnologyCard = styled.div`
  background-color: #B7B7B7;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  padding: 1.5rem;
  width: 300px;
  transition: transform 0.3s;
  text-align: center;

  &:hover {
    transform: scale(1.05);
  }
`;

function Technologies() {
  return (
    <TechnologySection id="technologies">
      <TechnologyTitle>Technologies</TechnologyTitle>
      <TechnologyContainer>

        <TechnologyCard>
          <ImHtmlFive2 size={40} /> 
          <p>
            <strong>HTML:</strong> I have a solid understanding of HTML, which serves as the backbone of all web pages. I utilize HTML to create the structure of web content, ensuring that it is semantically correct and accessible. This foundation allows me to build organized and meaningful layouts that enhance the user experience.
          </p>
        </TechnologyCard>

        <TechnologyCard>
          <SiCss3 size={40} /> 
          <p>
            <strong>CSS:</strong> I am proficient in CSS, which I use to style web pages and create visually appealing designs. I apply various CSS techniques, including flexbox and grid layout, to achieve responsive designs that look great on all devices. My CSS skills help me transform basic HTML structures into engaging and attractive user interfaces.
          </p>
        </TechnologyCard>

        <TechnologyCard>
          <FaReact size={40} /> 
          <p>
            <strong>React:</strong> I am skilled in React, a powerful JavaScript library for building user interfaces. With React, I develop reusable components that streamline the development process and enhance maintainability. I leverage React’s virtual DOM for efficient updates and dynamic rendering, creating seamless and interactive experiences for users.
          </p>
        </TechnologyCard>
        
      </TechnologyContainer>
    </TechnologySection>
  );
}

export default Technologies;
