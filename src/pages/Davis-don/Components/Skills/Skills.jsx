import React from 'react'
import  {StyledOverallContainer,SkillsMainTitle,SkillsCardOvearallContainer,StyledCardItem,IconDiv,ActualIcon,ProgressContainerStyled,Techtype}  from '../Styled/Skills.styled'
import SkillsData from '../Data/SkillsData';

function Skills() {
  return (
    <StyledOverallContainer>
        <SkillsMainTitle className='text-light'>My Skills</SkillsMainTitle>
        
          <SkillsCardOvearallContainer>
     
  {


    SkillsData.map((skill, index) => (
      

<StyledCardItem key={index}>
                <IconDiv className="icon-div">
                 <ActualIcon style={{color:skill.color}}> {skill.IconItem}</ActualIcon>
                </IconDiv>
                 <div className="card-text-box">
                  <ProgressContainerStyled>{skill.ProgressPercent}</ProgressContainerStyled>
                  <Techtype>{skill.Technology}</Techtype>
                 </div>
            </StyledCardItem>


    ))
  }

           
            
            

          </SkillsCardOvearallContainer>
        </StyledOverallContainer>
  )
}

export default Skills