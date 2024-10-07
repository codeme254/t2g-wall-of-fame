import React from 'react';
import { HeroContainer, HeroText, Avatar, ButtonContainer, ContactButton } from './Stylings/HeroStyles';
import floridaImage from '../../../assets/Florida.jpeg';  
import{Link} from 'react-router-dom'
const Hero = () => {
    return (
        <HeroContainer>
            <Avatar src={floridaImage} alt="Florida Gatwiri" />
            <HeroText>
                <h1>I'm <span>Florida Gatwiri</span></h1>
                <h2>Frontend developer based in Kenya.</h2>
                <p>I specialize in creating stunning user interfaces using React, and have experience working on various projects.</p>
            </HeroText>
            <ButtonContainer>
                <Link to="#Contact">
               
                <ContactButton>Connect with Me</ContactButton>
                </Link>
            </ButtonContainer>
        </HeroContainer>
    );
}

export default Hero;
