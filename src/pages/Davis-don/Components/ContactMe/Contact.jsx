import React from 'react'
import {OvearallContactUsContainer, ContactUsMainHeading,Contactparagraph,CardsContactHolder,LeftSideStyledSection,ContactDetailsOvearall,ContactIconContainer,RightSideStyledSection,ContactText,SubmitBtn} from '../Styled/Contact.styled'
import { FaPhone,FaWhatsapp  } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import ContactData from '../Data/ContactData';
import 'bootstrap/dist/css/bootstrap.min.css'

function  Contact() {
  return (
    <OvearallContactUsContainer>
        <ContactUsMainHeading>Contact Me</ContactUsMainHeading>
        <Contactparagraph>Get In Touch with me through</Contactparagraph>
      
    <CardsContactHolder>

      
        

        <LeftSideStyledSection>


        {
  ContactData.map((contactData, index) => {
    return (
      <ContactDetailsOvearall key={index}>
        <ContactIconContainer>
          <h1 className='text-light'>{contactData.iconValue}</h1>
        </ContactIconContainer>
        <ContactText>
          <div className="left-text">
            <h1 className='text-light'>{contactData.SocialName}</h1>
          </div>
          <div className="right-text">
            <h2 className='text-light'>{contactData.ContactDetail}</h2>
          </div>
        </ContactText>
      </ContactDetailsOvearall>
    );
  })
}
   
        </LeftSideStyledSection>







        <RightSideStyledSection>
          <h1 style={{color:'white'}}>Message Me</h1>
          <form style={{width:"30rem"}}>
            <label style={{color:'white'}} for='fullName'>Full Names</label><br/>
            <input style={{width:'100%'}} id='fullName'placeholder='full names'/><br/>
            <label style={{color:'white'}} for='email'>Email</label><br/>
            <input style={{width:'100%'}} id='email'placeholder='full names'/><br/>
            <label style={{color:'white'}} for='message'>Message</label><br/>
            <textarea style={{width:'100%'}} id='message' placeholder='comment'/><br/>
            <SubmitBtn type='submit'> Submit</SubmitBtn>
          </form>
        </RightSideStyledSection>
        </CardsContactHolder>
      
        </OvearallContactUsContainer>
  )
}

export default  Contact