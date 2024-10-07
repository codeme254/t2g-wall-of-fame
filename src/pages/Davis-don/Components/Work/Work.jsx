import React from 'react'
import { WorkHeading,StyledMyWorkSection,OverallWorkCard,ActualCard,Cardimg,CardMainHeading,BottomButton,IconSpan,ActualImage } from '../Styled/Work.styled';
import WorkData from '../Data/Workdata';
import { FaGithub } from "react-icons/fa";

function Work() {
  return (
    <StyledMyWorkSection>
        <WorkHeading >My work</WorkHeading>

        <OverallWorkCard>
          
        {
  WorkData.map((Data, index) => (
    <ActualCard key={index}>
      <Cardimg>
        <ActualImage src={Data.imgSample} alt="image of project" />
      </Cardimg>
      <div className="card-text-box">
        <CardMainHeading>{Data.projName}</CardMainHeading>
        <p>{Data.projectDescription}</p>
      </div>
     <a style={{color:'white'}} href={Data.githubCodeLink} target="_blank"> <BottomButton type="button">
        <IconSpan>
          <FaGithub style={{fontSize:'2rem',color:'white'}}/>
          </IconSpan>
        <span style={{padding:'.2rem',color:'white'}}>
            View Code
        </span>
      </BottomButton>
      </a>
    </ActualCard>
  ))
}

        </OverallWorkCard>
        </StyledMyWorkSection>
  )
}

export default Work;


