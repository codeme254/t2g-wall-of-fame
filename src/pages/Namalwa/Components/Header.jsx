import styled from "styled-components";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Headercontainer= styled.div`
font-size:1.5rem;
text-transform:capitalize;
display:flex;
justify-content: space-between;
padding:1rem 2rem;
background-color:black;
gap:5rem;
flex-wrap:wrap;
`

const Title = styled.h1`
color:white;
text-transform:uppercase;
`

const Navigationlist = styled.nav`
display:flex;
gap:6rem;

 @media (max-width: 45em) {
    flex-direction: column; 
    gap: 2rem; 
    margin-top:
  }
`

const Navigationlink = styled.a`
text-decoration:none;
color:white;
letter-spacing: .2rem;
font-size:2rem;
transition: color 0.3s ease-in-out;

&:hover{
color:#7E60BF;
}
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: #ffffff;
  font-size: 2.5rem;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;

function Header(){
    return(
        <Headercontainer>
        <Title>My Portfolio</Title>
        <Navigationlist>
            <Navigationlink href="#about">About</Navigationlink>
            <Navigationlink href="#technologies">Technologies</Navigationlink>
            <Navigationlink href="#projects">Projects</Navigationlink>
            <Navigationlink href="#contact">Contact</Navigationlink>
        </Navigationlist>

        <SocialLinks>
        <SocialIcon href="https://web.facebook.com/profile.php?id=100093255964350" target="_blank" aria-label="Facebook">
          <FaFacebook />
        </SocialIcon>
        <SocialIcon href="https://x.com/NamalwaNina" target="_blank" aria-label="Twitter">
          <FaTwitter />
        </SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/nina-namalwa-5016b7237/" target="_blank" aria-label="LinkedIn">
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon href="https://github.com/Namalwa" target="_blank" aria-label="GitHub">
          <FaGithub />
        </SocialIcon>
      </SocialLinks>

        </Headercontainer>
    )
}
export default Header;