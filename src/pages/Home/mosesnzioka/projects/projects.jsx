import "./projects.css";
import Title from "../title/title";
function Projectcard({ projecttitle, projectdescription }) {
  return (
    <div className="project-card">
      <div className="project-body">
        <h3 className="project-card-title">{projecttitle}</h3>
        <h4 className="project-description">{projectdescription}</h4>
        <a className="see-project" href="#">
          see the project
        </a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className="project-section">
      <Title maintitle="some of the project that have done" />
      <div className="projects-container">
        <Projectcard
          projecttitle="urban havens apartment"
          projectdescription="this is a project that i was given on august by urban havens apartment to buld a frontend page for there rentals, you can click the button bellow to see that project."
        />

        <Projectcard
          projecttitle="git guide"
          projectdescription="this is a project that i buld to guide people on how to use git, the reason for coming up with a such project was to ensure that people/students find it easy to use git."
        />
        <Projectcard
          projecttitle="rock paper scissor game"
          projectdescription="i buld this project for practising my skills in javascript and to increase my knowledge in javascript also to come up with a new idea that pleases my eyes am motivates me."
        />
      </div>
    </section>
  );
}
export default Projects;
