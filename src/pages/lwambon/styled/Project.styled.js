import styled from "styled-components";

export const ProjectContainer = styled.div`
  margin: 2rem auto;
  h2 {
    text-align: center;
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: bold;
    padding-top: 2rem;
  }
`;
export const ProjectCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  align-items: center;
  justify-content: center;
`;

export const ProjectItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 30rem;
  margin: 1rem;
  box-shadow: 0 0 3rem;
  :hover {
    transition: 0.4s;
  }
  img {
    width: 15rem;
    padding: 1.5rem;
    object-fit: cover;
  }
  h4 {
    text-transform: capitalize;
    text-align: center;
    font-size: 1.5rem;
    padding-bottom: 1rem;
  }
  p {
    line-height: 1.2;
    padding: 0.9rem;
    text-align: justify;
  }
  a {
    padding: 1rem;
    text-decoration: none;
    background-color: grey;
  }
`;
