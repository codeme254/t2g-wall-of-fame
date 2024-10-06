import styled from "styled-components";

export const HeaderStyled = styled.div`
  .logo-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      text-transform: uppercase;
      font-size: 2rem;
      font-weight: bold;
    }
    p span {
      color: #00ffee;
      text-shadow: 1 1 5px;
    }
  }
`;

export const NavListItems = styled.nav`
  .nav-items {
    gap: 3rem;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }
  .navigation-link {
    text-decoration: none;
    text-transform: capitalize;
    font-size: 2rem;
    color: black;
  }
`;
