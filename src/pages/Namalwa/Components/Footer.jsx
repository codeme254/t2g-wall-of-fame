import styled from "styled-components";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footersection = styled.footer`
  background-color: black;
  padding: 3rem 1rem;
  text-align: center;
`;

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

const FooterText = styled.p`
  color: #ffffff;
  margin-top: 2rem;
  font-size: 1.5rem;
`;

function Footer() {
  return (
    <Footersection>
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
      <FooterText>&copy;2024 Sifuna Nina Namalwa. All rights reserved.</FooterText>
    </Footersection>
  );
}

export default Footer;
