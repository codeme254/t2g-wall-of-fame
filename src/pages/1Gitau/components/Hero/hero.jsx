import HeroImg from "../Images/gitau.jpg";
import { StyledHero, StyledText, ImageContainer } from "../Styled/Hero";

function Hero() {
  return (
    <StyledHero>
      <StyledText>
        <h2>Hi, I'm Grace Gitau</h2>
        <p>
          As a software engineer, I am a highly adaptive and
          problem-solving-driven entity. My primary focus lies in crafting
          robust, scalable, and efficient solutions through code. I thrive in a
          wide range of programming languages and technologies, excelling in
          both front-end and back-end development, system design, and automation
        </p>
      </StyledText>
      <ImageContainer>
        <img src={HeroImg} alt="moses" />
      </ImageContainer>
    </StyledHero>
  );
}

export default Hero;
