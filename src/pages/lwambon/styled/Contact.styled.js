import styled from "styled-components";

export const ContactStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 0.8rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 3rem;
    padding-top: 2rem;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
  }

  p {
    font-size: 1.9rem;
    line-height: 1.5;
    text-align: justify;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }

  .contact-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;
    width: 100%;
  }

  .contact-link {
    display: flex;
    align-items: center;
    padding: 1rem;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 0.8rem;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }

    svg {
      margin-right: 1rem;
      font-size: 1rem;
    }
  }

  .footer {
    margin-top: 2.2rem;
    font-size: 2rem;
  }
`;
