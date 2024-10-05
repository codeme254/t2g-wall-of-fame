import React from "react";
import styled from "styled-components";
import image3 from "../../assets/about.jpg"


const StyledAbout=styled.div`
background: linear-gradient(to right, #c952bf, #e69593);
padding: 3rem;
display:flex;
padding:4rem;
box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
  

`
const Texts=styled.div`
width:50%;

h1{
    text-transform:capitalize;
    text-align:center;
    margin-bottom:2rem;

}
    p{
    margin:2rem; 
    line-height:4rem;
    
    }
`
const Profile=styled.div`
width:50%;

img{
height:90%;


}
`


function About(){
    return(
        <StyledAbout>
            <Texts>
                <h1>about me</h1>
                <p>I'm a front end developer that learned everything on my own. I specialize in creating dynamic, accessible websites that work on any device. Furthermore, I regularly create creative solutions that improve user experiences. I am proficient in React.js, JavaScript, HTML5, and CSS. I guarantee efficient code management and communication thanks to my knowledge with Git version control. Likewise, I'm also skilled at developing apps using mini program studio frameworks and exceeding client expectations with my high-caliber solutions.</p>

            </Texts>
            <Profile>

                <img src={image3} alt="about image" />

            </Profile>
            

        </StyledAbout>
    )
}
export default About