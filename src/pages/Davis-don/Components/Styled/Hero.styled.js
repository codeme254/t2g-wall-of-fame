import styled from 'styled-components'


export const StyledOverallHeroContainer=styled.div`
@media only screen and (min-width: 75em) {
display:flex;
flex-direction:row;
justify-content:center; 
align-items:center;
width:100%
height:100vh;
background-color:#0A001B;
}
@media only screen and (max-width: 75em) {
background-color:#0A001B;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

}


`;

export const StyledHeroTextBox = styled.div`
//   margin-left:4rem;
`;

export const HeroMainTitle = styled.h1`
font-size:10rem;
font-weight:0;
text-align:center;

@media only screen and (max-width: 40.625em) {
font-size:5rem;
text-align:center;
}

@media only screen and (max-width: 40.625em) {
font-size:9vw;
text-align:center;
}
`

export const SmallScreenImageContainer = styled.div`
@media only screen and (min-width: 75em) {
display:none;
}
`


export const LargeScreenImageContainer = styled.div`
@media only screen and (max-width: 75em) {
display:none;
}
`


