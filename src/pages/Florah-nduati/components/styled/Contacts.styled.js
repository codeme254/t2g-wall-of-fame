import styled from "styled-components";

export const StyledContact = styled.div`
  background: linear-gradient(to right, #5357cd, #a652c4);
  padding: 10rem;

  h1 {
    text-transform: capitalize;
    font-size: 7rem;
    text-align: center;
  }

  p {
    text-align: center;
    line-height: 4rem;
    margin: 0 20rem;
  }

  p {
    text-transform: capitalize;
    padding-top: 9rem;
    padding-bottom: 0;
  }

  .contact-links {
    display: flex;
    justify-content: center;
    gap: 7rem;
    margin: 3rem;
  }

  .contact-link {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    color: #fac078;
    font-size: 2rem;
    justify-content: space-between;
    text-decoration: none;
  }

  .contact-link:hover {
    color: #ffeb3b;
  }

  .footer {
    text-align: center;
    margin-top: 5rem;
  }
  @media (max-width: 1200px) {
    h1 {
      font-size: 5rem;
    }
    p {
      margin: 0 10rem;
      font-size: 2rem;
    }
    .contact-link {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    padding: 5rem;

    h1 {
      font-size: 4rem;
    }

    p {
      margin: 0 5rem;
      font-size: 1.8rem;
    }

    .contact-links {
      flex-direction: column;
      gap: 4rem;
    }

    .contact-link {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 480px) {
    padding: 3rem;

    h1 {
      font-size: 3rem;
    }

    p {
      margin: 0 2rem;
      font-size: 1.5rem;
    }

    .contact-link {
      font-size: 1.5rem;
    }
  }
`;
