import styled from "styled-components";

export const SkilledItems = styled.div`
  margin: 2rem 4rem;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  h2 {
    text-align: center;
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: bold;
    padding-top: 2rem;
  }
  ul {
    display: flex;
    list-style: none;
    gap: 3rem;
    flex-wrap: wrap;
    align-items: center;
    padding-top: 2rem;
  }
  @media screen and (max-width: 47.75) {
    ul {
      width: 100%;
    }
  }
  li {
    width: 35rem;
    height: 20rem;
    box-shadow: 0 0 2rem;
    align-items: center;
    padding-left: 1.2rem;
    h5 {
      font-size: 2rem;
      font-weight: bold;
      padding-bottom: 1.5rem;
    }
    p {
      align-items: center;
      line-height: 1.4;
    }
  }
`;
