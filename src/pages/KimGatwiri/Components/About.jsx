import React from 'react';
import { AboutContainer,AboutContent, AboutText, Avatar, TechContainer, TechItem, TechLevel, Title } from './Stylings/AboutStyles';
import aboutImage from '../../../assets/florida.jpeg';

const AboutMe = () => {
    return (
        <AboutContainer id='About'>
            <Title>About Me</Title>
            <AboutContent>
            <Avatar src={aboutImage} alt="Florida Gatwiri" />
            <AboutText>
                <p>
                Hi, I’m Florida Gatwiri, a web developer passionate about creating visually appealing and functional websites. With a growing knowledge of front-end technologies like HTML, CSS, and JavaScript, I’m eager to continue learning and building impactful web experiences.
                </p>
                <TechContainer>
                <TechItem style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span>HTML & CSS</span>
                        <TechLevel style={{ width: '60%' }}></TechLevel>
                    </TechItem>
                    <TechItem style={{ display: 'flex', alignItems: 'center', gap: '54px' }}>
                        <span>React JS</span>
                        <TechLevel style={{ width: '44%' }}></TechLevel>
                    </TechItem>
                     <TechItem style={{ display: 'flex', alignItems: 'center', gap: '37px' }}>
                        <span>JavaScript</span>
                        
                        <TechLevel style={{ width: '49%' }}></TechLevel>
                    </TechItem>
                    <TechItem style={{ display: 'flex', alignItems: 'center', gap: '109px' }}>
                        <span>Git</span>
                        
                        <TechLevel style={{ width: '59%' }}></TechLevel>
                    </TechItem>
                     
                </TechContainer>
            </AboutText>
            </AboutContent>
        </AboutContainer>
    );
};

export default AboutMe;
