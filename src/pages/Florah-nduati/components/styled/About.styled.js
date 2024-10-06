import styled from "styled-components";

export const StyledAbout = styled.div`
  background: linear-gradient(to right, #c952bf, #e69593);
  padding: 4rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
  }
`;

export const Texts = styled.div`
  width: 50%;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
  padding: 2rem;

  h1 {
    text-transform: capitalize;
    text-align: center;
    margin: 2rem;
    font-size: 3rem;
  }

  p {
    margin: 2rem;
    line-height: 2.5rem;
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.6rem;
      line-height: 2.2rem;
      margin: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1.4rem;
      line-height: 2rem;
    }
  }
`;

export const Profile = styled.div`
  width: 50%;

  img {
    width: 100%;
    height: auto;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
    padding: 2rem 0;

    @media (max-width: 768px) {
      width: 100%;
      padding: 1rem 0;
    }

    @media (max-width: 480px) {
      width: 100%;
    }
  }
`;
