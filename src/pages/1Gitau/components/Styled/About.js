import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 80%;
  margin: 10rem auto;
`;

export const AboutHeading = styled.h2`
  text-align: center;
  font-size: 4rem;
  margin-bottom: 1.5rem;
  text-transform: capitalize;
`;

export const AboutContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

export const AboutText = styled.p`
  flex: 1;
  line-height: 1.8;
  text-align: justify;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
`;

export const AboutImage = styled.img`
  width: 30rem;
  height: auto;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
`;