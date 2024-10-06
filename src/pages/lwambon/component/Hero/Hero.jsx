import { Link } from "react-router-dom";
import LucyHero from "../../../lwambon/assets/wambo.jpg";
import HeroStyled from "../../styled/hero.styled";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function Hero() {
  return (
    <HeroStyled id="Home">
      <div className="hero-container">
        <div className="image-hero">
          <img src={LucyHero} alt="hero image" />
        </div>
        <div className="hero-content-area">
          <h2>
            <span>hi, im lucy, </span>a Full stack developer
          </h2>
          <p>
            “ I’m a passionate software developer specializing in creating
            innovative and efficient solutions. With expertise in
            html,css,react, js and python. I transform ideas into impactful
            digital experiences.”
          </p>
        </div>

        <div className="social-links">
          <Link to="https://github.com/lwambon">
            {" "}
            <FaSquareGithub />
          </Link>
          <Link to="https://www.linkedin.com/in/lucy-wambui-225965242/">
            {" "}
            <FaLinkedin />
          </Link>

          <Link to="https://x.com/LucyWam39288384">
            {" "}
            <FaXTwitter />
          </Link>
        </div>
      </div>
    </HeroStyled>
  );
}

export default Hero;
