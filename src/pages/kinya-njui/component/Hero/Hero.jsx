import React from 'react';
import heroImg from '../../Images/Hero.jpg';  // Ensure correct image path
import { StyledHero, HeroTitle, HeroParagraph } from '../../styled/Hero.styled';

function Hero() {
  return (
    <StyledHero>
      <header>
        <HeroTitle>Charles Kinyanjui Portfolio</HeroTitle>
        <HeroParagraph>Welcome to my Portfolio page. Scroll down to learn more About Me.</HeroParagraph>
      </header>
      <img
        src={heroImg}
        alt="A laptop with code on the screen"
        style={{ display: 'block', margin: '0 auto' }}
      />
    </StyledHero>
  );
}

export default Hero;
