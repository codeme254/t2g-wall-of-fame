import styled from "styled-components";

export const StyledHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: linear-gradient(to right, #e0879e, #fac078);
  border-bottom: 1px solid black;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 10rem;
  justify-content: space-between;
  margin-left: 20rem;

  a {
    text-decoration: none;
    color: black;
    font-size: 3rem;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: white;
      background: linear-gradient(to right, #5857cd, #b751c2);
      font-size: 2rem;
      padding: 1rem;
      border-radius: 5px;
    }
  }

  @media (max-width: 1024px) {
    gap: 5rem;
    margin-left: 10rem;
    flex-wrap: wrap;
  }

  @media (max-width: 800px) {
    gap: 2rem;
    margin-left: 0;
    a {
      font-size: 2rem;
    }
  }
`;

export const LogoLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: blue;
  margin: 3rem;

  p {
    margin-left: 10px;
    font-size: 30px;
    font-weight: bold;
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0;
    p {
      margin-left: 0;
    }
  }
`;
