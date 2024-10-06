import styled from "styled-components";

export const HeroStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media screen and (max-width: 62.5em) {
    flex-direction: column;
    flex-wrap: wrap;
  }
 
  @media screen and (max-width: 50em){
    gap: none;
  }
  p {
    font-size: 2rem;
    letter-spacing: 2px;
    line-height: 1.8;
    width: 50%;
    text-align: justify;

    @media screen and (max-width: 50em){
      width: 100%;
    }
  }

  img {
    border-radius: 7px;
    width: 50%;
    height: 80vh;
    object-fit: contain;
    overflow: hidden;

    @media screen and (max-width: 50em){
      width: 100%;
    }
  }
`;
