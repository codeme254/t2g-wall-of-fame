import styled from "styled-components";
import Slider from "react-slick";

export const StyledProjects = styled.div`
  background: linear-gradient(to right, #9c52c5, #d063b3);
  text-align: center;
  padding: 5rem;

  h1 {
    padding: 2rem;
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    padding: 3rem;
    h1 {
      font-size: 3rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;

export const StyledSlider = styled(Slider)`
  width: 60%;
  margin: 0 auto;

  .slick-prev,
  .slick-next {
    top: 50%;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
  }

  .slick-prev:before,
  .slick-next:before {
    color: #000;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const ProjectCard = styled.div`
  padding: 2rem;
  margin: 3rem auto;
  border-radius: 10px;
  box-shadow: 5px 2px 9px rgba(0, 0, 0, 0.9);
  text-align: left;
  width: 50%;
  height: 50%;
  background-color: rgba(255, 255, 255, 0.1);

  h2 {
    font-size: 3rem;
    text-align: center;
    align-items: center;
    color: black;
  }

  p {
    font-size: 1.5rem;
    text-align: center;
    align-items: center;
    margin: 2rem 0;
  }

  .languages {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-top: 0.5rem;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.3rem;
    }
  }
`;

export const LanguageCard = styled.div`
  padding: 0.5rem 1rem;
  background: linear-gradient(to right, #5857cd, #b751c2);
  border-radius: 5px;
  box-shadow: 3px 1px 2px rgba(0, 0, 0, 0.1);
  font-size: 1.5rem;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const StyledSocial = styled.div`
  margin-top: 5rem;

  p {
    text-transform: capitalize;
    font-size: 2rem;
    color: #fff;
  }

  a {
    color: black;
    font-size: 4rem;
    align-items: center;
    transition: color 0.3s;

    &:hover {
      color: #ff6600;
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: 1.8rem;
    }

    a {
      font-size: 3.5rem;
    }
  }

  @media (max-width: 480px) {
    p {
      font-size: 1.5rem;
    }

    a {
      font-size: 3rem;
    }
  }
`;
