import CombineImg from "../Images/combined.jpg.png"
import InterviewImg from "../Images/interview.jpg.png"
import GitImg from  "../Images/git.jpg"
import {
  SkillsContainer,
  SkillsTitle,
  CardsContainer,
  Card,
  CardImage,
  CardText,
} from "../Styled/Skills";

function Skills() {
  return (
    <SkillsContainer>
      <SkillsTitle>Skills</SkillsTitle>
      <CardsContainer>
        <Card>
          <CardImage src={CombineImg} alt="Combined image" />
          <CardText>
            I am proficient in web development, with skills in JavaScript, HTML,
            and CSS. I have built interactive websites, including a recent
            project for Murang'a University Tech Club, where I used React to
            design various pages.
          </CardText>
        </Card>
        <Card>
          <CardImage src={InterviewImg} alt="interview image" />
          <CardText>
             I have worked on improving my
            soft skills through mock interviews and collaboration. These
            experiences have strengthened my communication and teamwork
            abilities, which are crucial in software development.
          </CardText>
        </Card>
        <Card>
          <CardImage src={GitImg} alt="Git image" />
          <CardText>
            I have experience in working with version control systems like Git
            and GitHub, manage codebases, and
            handle tasks such as branching, merging, and resolving conflicts.
          </CardText>
        </Card>
      </CardsContainer>
    </SkillsContainer>
  );
}

export default Skills;
