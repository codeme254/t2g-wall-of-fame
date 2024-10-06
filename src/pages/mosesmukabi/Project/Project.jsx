import {
  ProjectContainer,
  CardContainer,
  Card,
  CardHeading,
  CardDescription,
  ViewLink,
} from "../Styled/project";

function Project() {
  return (
    <ProjectContainer>
      <h2>Projects</h2>
      <CardContainer>
        <Card>
          <CardHeading>MUTC Techies</CardHeading>
          <CardDescription>
            The MUTC Techies project involved creating multiple pages centered
            around the MUTC. It showcases web development skills, such as
            structuring content, navigation, and possibly using front-end
            technologies like HTML, CSS, and JavaScript.
          </CardDescription>
          <ViewLink to="https://mutc-techies-u77f-git-main-mosesmukabis-projects.vercel.app/">
            View
          </ViewLink>
        </Card>
        <Card>
          <CardHeading>Rock Paper Scissor Game</CardHeading>
          <CardDescription>
            This project involves user input, random selection for the
            computer's choice, and logic to determine the winner based on rules.
            It’s great for learning control flow and randomization.
          </CardDescription>
          <ViewLink to="https://mosesmukabi.github.io/rock-paper-scissor-game/">
            View
          </ViewLink>
        </Card>
        <Card>
          <CardHeading>Haven Apartment</CardHeading>
          <CardDescription>
            This project is an HTML-based website featuring multimedia elements
            to showcase apartment layouts and features, providing a virtual tour
            experience for potential tenants or buyers.
          </CardDescription>
          <ViewLink to="https://mosesmukabi.github.io/Haven-appartment/">
            View
          </ViewLink>
        </Card>
        <Card>
          <CardHeading>GitBlog</CardHeading>
          <CardDescription>
            The GitBlog project offers a guide to Git commands for developers,
            making it easier to understand version control. It serves as a
            helpful reference for learning Git.
          </CardDescription>
          <ViewLink to="https://mosesmukabi.github.io/gitblog/">View</ViewLink>
        </Card>
        <Card>
          <CardHeading>To-Do List</CardHeading>
          <CardDescription>
            The To-Do List is a web app built using HTML, CSS, and JavaScript
            that allows users to manage tasks with basic CRUD functionality. It
            showcases essential front-end development skills.
          </CardDescription>
          <ViewLink to="https://mosesmukabi.github.io/gitblog/">View</ViewLink>
        </Card>
      </CardContainer>
    </ProjectContainer>
  );
}

export default Project;
