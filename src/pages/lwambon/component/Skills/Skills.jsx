import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJsSquare,
} from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { SkilledItems } from "../../styled/Skills.styled";

function Skills() {
  return (
    <SkilledItems>
      <h2>my skills</h2>
      <ul>
        <li>
          <FaReact size={50} color="blue" />
          <h5>React</h5>
          <p>
            A JavaScript library for building user interfaces, especially
            single-page applications.
          </p>
        </li>

        <li>
          <FaJsSquare size={50} color="yellow" />
          <h5>JavaScript</h5>
          <p>
            A versatile programming language used for web development and
            enhancing interactivity.
          </p>
        </li>

        <li>
          <FaHtml5 size={50} color="orange" />
          <h5>HTML</h5>
          <p>
            The standard markup language for creating web pages and structuring
            content online.
          </p>
        </li>

        <li>
          <FaCss3Alt size={50} color="blue" />
          <h5>CSS</h5>
          <p>
            A stylesheet language that describes the presentation of a document
            written in HTML.
          </p>
        </li>

        <li>
          <FaPython size={50} color="green" />
          <h5>Python</h5>
          <p>
            A high-level programming language known for its readability and
            versatility in various applications.
          </p>
        </li>

        <li>
          <SiVite size={50} color="purple" />
          <h5>Vite.js</h5>
          <p>
            A modern build tool that provides a faster and leaner development
            experience for web projects.
          </p>
        </li>
      </ul>
    </SkilledItems>
  );
}

export default Skills;
