import styled from "styled-components";

export const AboutOverallContainer = styled.div`
// height:max-content;
  background-color: #0A0C22;
  // display:grid;
  // grid-template-columns:repeat(auto-fit,minmax(40rem,1fr));
  display:flex;
  flex-direction:row;
  gap:5rem;


  @media only screen and (max-width: 29.375em) {
  display:flex;
  flex-direction:column;
  gap:2rem;
  }

`;

export const StyledLeftSideAbout = styled.div `


`
export const StyledAboutImg =styled.img`
width:100%;
object-fit:cover;

`

export const StyledAboutMainTitle =styled.div `
font-size:5rem;
color:white;
 @media only screen and (max-width: 46.875em) {
    text-align:center;
  }
    @media only screen and (max-width: 29.375em) {
 font-size:10vw;

  }
`

export const RightsideboutSectionMajor =styled.div `

`


export const RightSideAbout =styled.p`
font-size:2rem;
color:white;
@media only screen and (max-width: 46.875em) {
    margin-inline:1rem;
  }
`


