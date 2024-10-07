import styled from 'styled-components'


export const StyledOverallHeroContainer=styled.div`
background-color:#0A001B;
@media only screen and (min-width: 75em) {
display:flex;
flex-direction:row;
justify-content:center; 
align-items:center;
width:100%
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
color:white;

@media only screen and (max-width: 40.625em) {
font-size:5rem;
text-align:center;
}

@media only screen and (max-width: 40.625em) {
font-size:3rem;
text-align:center;
}
`

export const  ParagraphItem =styled.p`
color:white;
font-size:2.5rem;
margin:2rem;
`
export const SmallScreenImageContainer = styled.div`
// width:100%;
// height:max-content;
// margin:1rem;

@media only screen and (min-width: 75em) {
display:none;
}

 @media only screen and (min-width: 25em) {
width:100%;
height:max-content;
margin:1rem;
 }
`

export const SmallScreenImageActual = styled.img`
width:100%;
height:100%;
object-fit:cover;

 @media only screen and (min-width: 25em) {
height:60rem;
width:100%;
object-fit:cover;
 }
`


export const LargeScreenImageContainer = styled.div`
@media only screen and (max-width: 75em) {
display:none;
}
`


