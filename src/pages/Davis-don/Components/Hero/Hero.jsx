import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {StyledOverallHeroContainer,StyledHeroTextBox,HeroMainTitle,SmallScreenImageContainer,SmallScreenImageActual,LargeScreenImageContainer,ParagraphItem } from '../Styled/Hero.styled'
import hero_setup from '../../Assets/hero_setup.avif'



function Hero() {
  return (
  

    
    <StyledOverallHeroContainer className='container-fluid'>

        <SmallScreenImageContainer>
        {/* <img  src={hero_setup}  alt='laptop on desk'/> */}
        <SmallScreenImageActual  src={hero_setup}  alt='laptop on desk'/>
        </SmallScreenImageContainer>
        <StyledHeroTextBox>
      <HeroMainTitle>WELCOME</HeroMainTitle>
      <ParagraphItem> My name is Davis Ikou, a Full-Stack developer based in Nyeri, Kenya. I have worked on a wide range of Front-end, Back-end and Full-Stack projects from simple one-page portfolios to eCommerce booking platforms, with a focus on creating clean, well-crafted platforms that not only look great but also provide a seamless user experience.</ParagraphItem>
        </StyledHeroTextBox>
        <LargeScreenImageContainer>
      <img src={hero_setup}  alt='laptop on desk'/>
        </LargeScreenImageContainer>
        </StyledOverallHeroContainer>
  )
}

export default Hero