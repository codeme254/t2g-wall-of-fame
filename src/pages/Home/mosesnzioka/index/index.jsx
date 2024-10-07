import AboutMe from "../aboutme/aboutme";
import HeroMoses from "../hero/hero";
import Skills from "../skills/skills";
import Projects from "../projects/projects";
import Conducts from "../conducts/conduct";

function Index() {
  return (
    <div>
      <HeroMoses />

      <AboutMe />
      <Skills />
      <Projects />
      <Conducts />
    </div>
  );
}
export default Index;
