import HeroImg from "../Images/hero-img.webp";
import { HeroStyled } from "./Styled/Hero.styled";

function Hero() {
  return (
    <>
      <HeroStyled>
        <p>
          Welcome! I'm Newton, a creative and driven software developer. I craft
          engaging and efficient web solutions using React, JavaScript, and
          modern web technologies. Let's turn ideas into reality with clean,
          scalable code and innovative design. Together, we can build something
          amazing!
        </p>
        <img src={HeroImg} alt="Hero Image" />
      </HeroStyled>
    </>
  );
}

export default Hero;
