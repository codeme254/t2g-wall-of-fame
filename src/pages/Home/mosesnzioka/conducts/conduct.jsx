import Title from "../title/title";
import "../conducts/conducts.css";
import { FaFacebookSquare, FaPhoneVolume, FaTwitter } from "react-icons/fa";

function Conductslink({ children }) {
  return <div className="conduct-links">{children}</div>;
}

function Conducts() {
  return (
    <section className="conducts-section">
      <Title maintitle="Contact Me" />
      <div className="conduct-site">
        <div className="conducts-container">
          <Conductslink>
            <div className="contact-item">
              <FaFacebookSquare />
              <p>mmsa mose</p>
            </div>
            <div className="contact-item">
              <FaPhoneVolume />
              <p>0742769499</p>
            </div>
            <div className="contact-item">
              <FaTwitter />
              <p>@De Mosee</p>
            </div>
          </Conductslink>
        </div>
      </div>
    </section>
  );
}

export default Conducts;
