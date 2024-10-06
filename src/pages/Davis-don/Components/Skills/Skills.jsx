import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import  {StyledOverallContainer,SkillsMainTitle,SkillsCardOvearallContainer,StyledCardItem,IconDiv,ProgressContainerStyled}  from '../Styled/Skills.styled'
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
                 <h2 className='fs-1 text-danger'> {skill.IconItem}</h2>
                </IconDiv>
                <ProgressContainerStyled >
                <h4 className='text-light'>{skill.Technology}</h4>
                <div className="progress">
  <div className="progress-bar progress-bar-striped progress-bar-animated"  style={{ width: skill.ProgressPercent }}></div>
</div>
                </ProgressContainerStyled>
            </StyledCardItem>


    ))
  }

           
            
            

          </SkillsCardOvearallContainer>
        </StyledOverallContainer>
  )
}

export default Skills