import styled from "styled-components";

export const StyledMyWorkSection = styled.div`


`

export const WorkHeading =styled.h1`
text-align:center;
color:white;
margin-bottom:2rem;
`

export  const OverallWorkCard = styled.div`


   @media only screen and (min-width: 25em) {
display:grid;
  grid-template-columns:repeat(auto-fit,minmax(20rem,1fr));
  gap:3rem;
  width:80vw;
  margin:auto;
}


   @media only screen and (max-width: 25em) {
display:flex;
flex-direction:column;
gap:2rem;
margin:1rem;
}
` 

export const ActualCard = styled.div `
background-color:white;
border-radius:2rem;
padding:1rem;

`
export const Cardimg = styled.div`
height:20rem;
margin:auto;
`
export const ActualImage = styled.img `
width:100%;
height:100%;
object-fit:cover;
border-radius:1rem;
`
export const CardMainHeading =styled.h1 `
text-align:center;
`

export const BottomButton = styled.button `
width:100%;
border-radius:1rem;
background-color:#4A148C;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
gap:1rem;
`
export const IconSpan = styled.span `

`