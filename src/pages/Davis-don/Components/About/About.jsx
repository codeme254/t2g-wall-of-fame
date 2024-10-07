import React from 'react'
import  {AboutOverallContainer,StyledLeftSideAbout,RightsideboutSectionMajor,RightSideAbout,StyledAboutMainTitle,StyledAboutImg}  from '../Styled/About.styled'
import ImgDon from '../../Assets/CodeSamurai.jpeg'

function About() {
  return (
    <AboutOverallContainer className='container-fluid'>
      <StyledLeftSideAbout>
     <StyledAboutImg className='container-fluid'  src={ImgDon} alt='image of davis'/>
      </StyledLeftSideAbout>
      <RightsideboutSectionMajor>
       <StyledAboutMainTitle className='text-light'>MEET DAVIS</StyledAboutMainTitle>
       <RightSideAbout className='text-light container-fluid'>Hello! I'm Davis Mugo, a passionate and dedicated Full-Stack Software Engineer with a background in Mathematics and Computer Science. I graduated from Murang’a University of Technology, where I pursued a Bachelor of Science in Mathematics and Computer Science. It was during my second year of university that I discovered my passion for programming, and since then, I have never looked back.
          <br/>
          <br/>
          With 3 years of hands-on experience, I’ve honed my skills across both front-end and back-end development. My journey in software engineering began with personal projects, and later evolved into a professional path as I tackled real-world challenges and developed solutions for a wide range of applications.
          <br/>
          <br/>
          After completing my degree, I further expanded my expertise by joining Teach2Give, where I underwent an intensive Software Engineering course. This experience refined my skills, keeping me up-to-date with industry trends and best practices.
          <br/>
          <br/>
          Currently, I work as a freelancer, where I collaborate with clients on innovative projects, delivering high-quality software solutions. My goal is to build impactful and scalable applications that solve real-world problems.
       </RightSideAbout>
      </RightsideboutSectionMajor>
    </AboutOverallContainer>
  )
}

export default About