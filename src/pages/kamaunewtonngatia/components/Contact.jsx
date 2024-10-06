import React from "react";
import { StyledHeading } from "./Styled/About.styled";
import { StyledForm } from "./Styled/Contact.styled";


function Contact() {
  return (
    <>
      <StyledHeading>contact</StyledHeading>
      <StyledForm>
        <label htmlFor="first-name">first name</label>
        <input type="text" id="first-name" placeholder="eg newton" required />

        <label htmlFor="last-name">last name</label>
        <input type="text" id="last-name" placeholder="eg kamau" required />

        <label htmlFor="email">email address</label>
        <input
          type="email"
          id="email"
          placeholder="eg newtonkamau01@gmail.com"
          required
        />

        <label htmlFor="phone">phone</label>
        <input
          type="number"
          id="phone"
          placeholder="eg +254798765432"
          required
        />

        <textarea id="about" placeholder="write an inquiry"></textarea>
        <button>Submit</button>
      </StyledForm>
    </>
  );
}

export default Contact;
