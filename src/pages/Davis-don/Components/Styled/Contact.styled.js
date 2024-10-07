import styled from "styled-components";

export const OvearallContactUsContainer = styled.div `
margin-top:5rem;
`
export const ContactUsMainHeading = styled.h1 `
text-align:center;
color:white;
font-size:4rem;


 @media only screen and (max-width: 18.75em) {
font-size:3rem;
}
`

export const Contactparagraph =styled.h1 `
text-align:center;
font-size:2rem;
color:white;
`

export const CardsContactHolder = styled.div `
display:flex;
flex-direction:row;
justify-content:space-between;


 @media only screen and (max-width: 44.375em) {
display:flex;
flex-direction:column
}

`

export const LeftSideStyledSection = styled.div `
width:max-content;
margin:auto;
width:100%;
height:max-content;

 @media only screen and (max-width: 44.375em) {
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:center;
align-items:center;
}


`
export  const ContactDetailsOvearall =styled.div `

 @media only screen and (min-width: 44.375em) {
display:flex;
flex-direction:row;
gap:2rem;
justify-content:center;
align-items:center;
margin:5rem;

}

 @media only screen and (max-width: 44.375em) {

display:flex;
flex-direction:row;
justify-content:center;
gap:1rem;
margin:1rem;
align-items:center;
}
`

export const ContactIconContainer =styled.div `
`

export const RightSideStyledSection = styled.div `
width:max-content;
margin:auto;
width:100%;
`

export const ContactForm = styled.form `
display:flex;
flex-direction:column;
gap:2rem;
margin:auto;
width:90%;


 @media only screen and (max-width: 44.375em) {
width:80vw;

}

`
export const ContactText =styled.div `
// display:flex;
// flex-direction:row;
// gap:.5rem;

`
export const SubmitBtn = styled.button `
width:15rem;
border-radius:1rem;

`