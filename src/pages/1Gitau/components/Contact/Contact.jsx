
 

import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import {ContactsContainer,ContactCard,Title,ContactInfo,SocialIcons,} from "../Styled/Contact.styled"

function Contacts() {
  const handleTwitterLink = () => {

  };

  return (
    <ContactsContainer>
      <ContactCard>
        <Title>Contact Me</Title>
        <div>
          <ContactInfo>gitau0890@gmail.com</ContactInfo>
          <ContactInfo>Tell: 0722246427</ContactInfo>
          <SocialIcons>
            <Link onClick={handleTwitterLink}>
              <FaTwitter />
            </Link>
          </SocialIcons>
        </div>
      </ContactCard>
    </ContactsContainer>
  );
}

export default Contacts;
