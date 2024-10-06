import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 60%;
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
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
  padding: 3rem;
`;

export const AboutImage = styled.img`
  width: 20rem;
  height: auto;
  border-radius: 100px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
`;
