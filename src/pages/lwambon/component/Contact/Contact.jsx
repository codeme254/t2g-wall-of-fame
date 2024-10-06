import { ContactStyles } from "../../styled/Contact.styled";
import { FaSquarePhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaSquareWhatsapp } from "react-icons/fa6";

function Contact() {
  return (
    <ContactStyles>
      <div>
        <h2>contact me</h2>
        <p>
          I would love to connect and discuss exciting opportunities with you!
          Whether you have fascinating projects, innovative ideas, or simply
          want to have a conversation, feel free to reach out anytime. My inbox
          is always open!
        </p>

        <div className="contact-links">
          <a href="tel:+254746549251" className="contact-link">
            <FaSquarePhone /> +254 746549251
          </a>
          <a href="mailto:lwambonyaga@gmail.com" className="contact-link">
            <SiGmail /> lwambonyaga@gmail.com
          </a>
          <a
            href="https://wa.me/254746549251"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaSquareWhatsapp /> WhatsApp
          </a>
        </div>
      </div>
      <p className="footer">&copy; 2024 built by Lucy</p>
    </ContactStyles>
  );
}

export default Contact;
