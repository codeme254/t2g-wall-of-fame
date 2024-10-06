import styled from "styled-components";

const Contactcontainer = styled.div`
margin-top:5rem;
padding: 60px 20px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  `

const Contacttitle = styled.h1`
text-align:center;
margin-bottom: 20px;
`

const Contactform = styled.form`
display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
`

const Formfield = styled.div`
 display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  `

const Label = styled.label`
  font-size: 1em;
  color: #333;
  margin-bottom: 5px;
`
const Input = styled.input`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
  outline: none;
`
const TextArea = styled.textarea`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  resize: vertical;
  min-height: 100px;
`

const SubmitButton = styled.button`
  padding: 12px;
  font-size: 1em;
  color: white;
  background-color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #E4B1F0;
    color:black;
  }
`

function Contact(){
    return(
        <Contactcontainer id="contact">
            <Contacttitle>Contact</Contacttitle>
        <Contactform>
            <Formfield>
            <Label htmlFor="name">Full Name</Label>
            <Input type="text" id="name" name="name" required />
            </Formfield>

            <Formfield>
            <Label htmlFor="name">Email Address</Label>
            <Input type="text" id="email" name="name" required />
            </Formfield>

            <Formfield>
            <Label htmlFor="message">Message</Label>
          <TextArea id="message" name="message" required />
          </Formfield>

          <SubmitButton type="submit">Send Message</SubmitButton>
        </Contactform>
        </Contactcontainer>
    )
}
export default Contact;
