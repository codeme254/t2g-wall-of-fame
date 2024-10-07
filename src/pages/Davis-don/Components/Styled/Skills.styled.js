import styled from "styled-components";

export const StyledOverallContainer = styled.div`
  height: max-content;
  width: 100%;
  padding:2rem;
`;

export const SkillsMainTitle = styled.h1 `
text-align:center;
font-size:4rem;

 @media only screen and (max-width: 18.75em) {
font-size:3rem;
}
`

export const StyledSkillsOvearallContainer= styled.div `
  
`

export const SkillsCardOvearallContainer= styled.div`
 @media only screen and (min-width: 18.75em) {
height:max-content;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(20rem,1fr));
  gap:3rem;
}


  @media only screen and (max-width: 18.75em) {
display:flex;
flex-direction:column;
gap:3rem;
}
`

export const StyledCardItem = styled.div`
display:flex;
flex-direction:column;
 border:2px solid gray;
  border-radius: 20% 20% 20% 20%;
  height:30rem;
  padding:2rem;
` 

export const IconDiv=styled.div `
width:max-content;
margin:auto;
background-color:grey;
border-radius:50%;
padding:1rem;

`

export const ActualIcon = styled.h2`
font-size:5rem;
`
export const ProgressContainerStyled =styled.div `
color:white;
font-size:5rem;
text-align:center;
`

export const Techtype= styled.p `
color:grey;
text-align: center;
font-size:2rem;
`