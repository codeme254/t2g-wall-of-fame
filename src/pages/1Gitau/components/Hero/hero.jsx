




import HeroImg from "../Images/hero.jpg";
import { StyledHero, StyledText, ImageContainer } from "../Styled/Hero";

function Hero() {
  return (
    <StyledHero>
      <StyledText>
        <h2>Hi, I'm Grace Gitau</h2>
        <p>
          A passionate Software Engineer specialized in building scalable,
          efficient, and user-centric software solutions. With a focus on modern
          technologies, problem-solving, and continuous learning, I thrive in
          creating innovative applications that make a difference.
        </p>
      </StyledText>
      <ImageContainer>
        <img src={HeroImg} alt="moses" />
      </ImageContainer>
    </StyledHero>
  );
}

export default Hero;