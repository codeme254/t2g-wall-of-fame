import styled from "styled-components";

export const StyledContainer = styled.section`
  width: 35rem;
  text-align: center;

  h1 {
    font-size: 7rem;
    margin-block: 10px;
  }

  h4 {
    margin-bottom: 10px;
  }

  p {
    letter-spacing: 1px;
    line-height: 1.5;
    text-align: justify;
  }
`;

export const StyledOverallContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: center;
`;
