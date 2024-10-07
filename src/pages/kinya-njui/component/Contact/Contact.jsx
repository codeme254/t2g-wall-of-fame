import React from 'react';
import { 
  ContactCardContainer, 
  ContactItem, 
  ContactTitle, 
  ContactInformation 
} from '../../styled/Contact.styled';

const Contact = () => {
  return (
    <ContactCardContainer>
      <ContactTitle>How You Can Contact Me</ContactTitle>
      <ContactInformation>Contact Information</ContactInformation> {/* Corrected usage */}
      <ContactItem>
        <strong>Name:</strong> Charles Kinyanjui
      </ContactItem>
      <ContactItem>
        <strong>Phone:</strong> +254 793 745 590
      </ContactItem>
      <ContactItem>
        <strong>Email:</strong> kinyanjuicharlesm@gmail.com
      </ContactItem>
      <ContactItem>
        <strong>Location:</strong> Nairobi, Kenya
      </ContactItem>
    </ContactCardContainer>
  );
};

export default Contact;
