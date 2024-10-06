import styled from "styled-components";

const HeroStyled = styled.div`
  .hero-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-color: #f5f5f5;
  }

  .image-hero img {
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    margin-right: 2rem;
  }

  .hero-content-area h2 {
    font-size: 2.5rem;
    color: #333;
    text-align: center;
    padding-top: 2rem;
    letter-spacing: 1.8;
    text-transform: uppercase;
  }

  .hero-content-area h2 span {
    color: purple;
  }

  .hero-content-area p {
    font-size: 1.8rem;
    color: #666;
    margin: 2rem 0;
    text-align: center;
  }

  .social-links {
    justify-content: space-between;
    margin-top: 2rem;
    border-radius: 40rem;

    a {
      padding: 2rem 1rem;
      font-size: 3rem;
      color: purple;
    }
  }
`;

export default HeroStyled;
