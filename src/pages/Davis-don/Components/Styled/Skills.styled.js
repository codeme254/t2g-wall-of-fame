import styled from "styled-components";

export const StyledOverallContainer = styled.div`
  height: max-content;
  width: 100%;
  padding:2rem;
`;

export const SkillsMainTitle = styled.h1 `
text-align:center;
`

export const StyledSkillsOvearallContainer= styled.div `
  
`

export const SkillsCardOvearallContainer= styled.div`
height:max-content;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(40rem,1fr));
  gap:3rem;

  @media only screen and (max-width: 30em) {
display:flex;
flex-direction:column
}
`

export const StyledCardItem = styled.div`
display:flex;
flex-direction:row;
gap:1rem;

` 

export const IconDiv=styled.div `



`
export const ProgressContainerStyled =styled.div `
width:100%;
`