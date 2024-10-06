import React from 'react';
import { Section, Title, ContactInfo, FormWrapper, FormField, SubmitButton } from './Stylings/ContactStyles';

function Contact() {
  return (
    <Section id="Contact">
      <Title>Get in Touch</Title>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ContactInfo>
          <h3>Let's Talk</h3>
          <p>I'm based in Murang'a ,Kenya</p>
          <h4>Contact Details</h4>
          <p>Email:gatwirifloridah4@gmail.com</p>
          <p>Phone: +254740075326</p>
        </ContactInfo>
        <FormWrapper>
          <form>
            <FormField>
              <label htmlFor="name">Your Name:</label>
              <input type="text" id="name" name="name" autoComplete="name" required />
            </FormField>
            <FormField>
              <label htmlFor="email">Your Email:</label>
              <input type="email" id="email" name="email" autoComplete="email" required />
            </FormField>
            <FormField>
              <label htmlFor="message">Write something:</label>
              <textarea id="message" name="message" rows="4" autoComplete="off" required></textarea>
            </FormField>
            <SubmitButton type="submit">Submit</SubmitButton>
          </form>
        </FormWrapper>
      </div>
    </Section>
  );
}

export default Contact;
