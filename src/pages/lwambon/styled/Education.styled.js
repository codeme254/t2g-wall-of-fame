import styled from "styled-components";

export const EducationStyled = styled.div`
  h2 {
    text-align: center;
    margin-top: 1.5rem;
    font-size: 2.9rem;
    text-transform: uppercase;
    font-weight: bold;
  }
`;
export const EducationContainer = styled.div`
  margin: 2rem auto;
  box-shadow: 0 0 3rem;
  width: 80rem;
  align-items: center;

  h3 {
    text-transform: capitalize;
    padding-top: 1.5rem;
    text-align: center;
    font-size: 2rem;
    text-shadow: 0 0 6rem;
  }
  h4 {
    text-transform: capitalize;
    font-size: 1.5rem;
    padding: 1.7rem;
  }
  h4 span {
    color: black;
    text-transform: uppercase;
    gap: 0.9rem;
    font-size: 1.3rem;
  }
`;
export const EducationDetail = styled.div`
  text-align: center;
  margin: 0.7rem;
  line-height: 2;
  font-size: 1.5rem;
  @media screen and (max-width: 47.75rem) {
    .EducationDetail {
      width: 100%;
      margin: 0;
    }
  }
`;
