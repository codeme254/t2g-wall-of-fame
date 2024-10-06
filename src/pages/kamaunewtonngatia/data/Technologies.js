import { BsFiletypeCss } from "react-icons/bs";
import { TbBrandNodejs } from "react-icons/tb";
import { TbFileTypeHtml } from "react-icons/tb";
import { FaSquareGit } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";

const technologies = [
  {
    icon: TbBrandNodejs,
    name: "Node.js",
    description:
      "Node.js is a powerful JavaScript runtime built on Chrome's V8 engine, enabling server-side scripting to create fast and scalable network applications.",
  },
  {
    icon: FaSquareGit,
    name: "Git",
    description:
      "Git is a distributed version control system that allows developers to track changes, collaborate, and manage codebases with speed and efficiency.",
  },
  {
    icon: TbFileTypeHtml,
    name: "HTML",
    description:
      "HTML (HyperText Markup Language) is the foundation of web development, used to structure content on the web and create the skeleton of web pages.",
  },
  {
    icon: BsFiletypeCss,
    name: "CSS",
    description:
      "CSS (Cascading Style Sheets) is used to style and layout web pages, enhancing the visual presentation and user experience with responsive design techniques.",
  },
  {
    icon: FaReact,
    name: "React",
    description:
      "React is a popular JavaScript library for building user interfaces, focusing on building dynamic, fast, and responsive single-page applications.",
  },
];
export default technologies;
