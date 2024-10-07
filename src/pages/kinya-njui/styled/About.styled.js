import styled from "styled-components";

export const AboutSection = styled.section`
  padding: 2rem 3rem;
  background-color: #f9f9f9;
`;

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem;
`;

export const AboutText = styled.div`
  flex: 1;
  margin-right: 2rem;

  h2 {
    font-size: 3rem;
    margin-bottom: 2.5rem;
    color: #333;
    padding: 2rem;
    text-align: center;
  }

  p {
    font-size: 2rem;
    line-height: 1.6;
    color: #555;
  }
`;

export const AboutImage = styled.div`
  flex: 1;
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;
