import styled from "styled-components";

export const EngineersCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;
  margin: 10rem 0;
`;

export const EngineerCard = styled.div`
  width: 35rem;
  padding: 1rem;
  box-shadow: 1rem 1rem 5rem rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  h3 {
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 1rem;
  }

  img {
    width: 100%;
    height: 25rem;
    object-fit: cover;
  }

  div {
    display: flex;
    justify-content: space-between;

    a {
      display: flex;
      padding: 2rem 2.5rem;
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
      border-radius: 5px;
      text-decoration: none;
      font-size: 1.8rem;
      text-transform: capitalize;
      gap: 1rem;
      font-weight: 600;
      letter-spacing: 1.5px;

      p {
        font-size: ${({ theme }) => theme.fontSizes.normal};
      }
    }
  }
`;

export const EngineerExcerpt = styled.p`
  text-align: justify;
  line-height: 1.5;
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-align-last: justify;
  margin: 2rem 0;
`;
