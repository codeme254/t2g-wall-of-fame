import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  background: linear-gradient(to right, #ce5db8, #eea689);
  flex-direction: row;
  align-items: center;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    height: auto;
  }
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  text-align: center;

  h1 {
    margin-bottom: 3rem;
    font-size: 3rem;
  }

  h2 {
    margin-bottom: 3rem;
    font-size: 2.5rem;
  }

  h3 {
    margin-bottom: 3rem;
    font-size: 2rem;
  }

  h4 {
    margin-bottom: 3rem;
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;

    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.8rem;
    }

    h4 {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.8rem;
    }

    h3 {
      font-size: 1.6rem;
    }

    h4 {
      font-size: 1.4rem;
    }
  }
`;

export const Button = styled.button`
  color: white;
  background: linear-gradient(to right, #5857cd, #b751c2);
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #555;
  }
`;

export const Social = styled.div`
  margin-top: 20px;
  text-align: center;

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 4rem;
  }

  a {
    color: #5857cd;
    font-size: 3rem;
    align-items: center;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.9);
    transition: color 0.3s;

    &:hover {
      color: #ff6600;
      font-size: 4rem;
    }
  }

  @media (max-width: 768px) {
    .social-icons {
      gap: 20px;
    }

    a {
      font-size: 2.5rem;
    }
  }
`;

export const Profile = styled.div`
  width: 50%;
  gap: 2rem;
  margin: 3rem;
  height: 100%;
  display: flex;
  flex-direction: row;

  img {
    width: 70%;
    height: 70%;
    padding: 5rem;
    margin: 10rem;
    object-fit: cover;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
    border-radius: 50%;

    @media (max-width: 768px) {
      width: 80%;
      height: auto;
      margin: 5rem auto;
      padding: 1rem;
    }

    @media (max-width: 480px) {
      width: 90%;
      margin: 2rem auto;
    }
  }
`;
