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
                    <TechItem>
                        <span>HTML & CSS</span>
                        <TechLevel style={{ width: '70%' }}></TechLevel>
                    </TechItem>
                    <TechItem>
                        <span>React JS</span>
                        <TechLevel style={{ width: '50%' }}></TechLevel>
                    </TechItem>
                    <TechItem>
                        <span>JavaScript</span>
                        
                        <TechLevel style={{ width: '60%' }}></TechLevel>
                    </TechItem>
                    <TechItem>
                        <span>Git</span>
                        <TechLevel style={{ width: '75%' }}></TechLevel>
                    </TechItem>
                </TechContainer>
            </AboutText>
            </AboutContent>
        </AboutContainer>
    );
};

export default AboutMe;
