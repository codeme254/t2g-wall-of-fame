import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import {
  EngineerCard,
  EngineerExcerpt,
  EngineersCardsContainer,
} from "./styled/Engineers.styled";
import sampleHeadshot from "../../assets/sample-headshot.jpg";
import engineers from "../../data/engineers";

function Engineer({ name, headshot, excerpt, portfolioUrl, githubUrl }) {
  return (
    <EngineerCard>
      <h3>{name}</h3>
      <img src={headshot} alt={`headshot of ${name}`} />
      <EngineerExcerpt>{excerpt}</EngineerExcerpt>
      <div>
        <Link to={portfolioUrl}>
          {" "}
          <FaLink /> <p>portfolio</p>
        </Link>
        <Link to={githubUrl}>
          {" "}
          <FaSquareGithub /> <p>github</p>
        </Link>
      </div>
    </EngineerCard>
  );
}

function Engineers() {
  return (
    <EngineersCardsContainer>
      {engineers.map((engineer, i) => (
        <Engineer
          name={engineer.name}
          headshot={engineer.headshot}
          excerpt={engineer.excerpt}
          portfolioUrl={engineer.portfolioUrl}
          githubUrl={engineer.githubUrl}
          key={i}
        />
      ))}
    </EngineersCardsContainer>
  );
}

export default Engineers;
