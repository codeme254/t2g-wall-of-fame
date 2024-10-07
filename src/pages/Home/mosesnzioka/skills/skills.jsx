import Title from "../title/title";
import html from "../assets/html2.png";
import nodejs from "../assets/nodejs.png";
import css from "../assets/css1.png";
import js from "../assets/js1.png";
import php from "../assets/php1.png";
import react from "../assets/react.png";

import "./skills.css";
function Skillscard({ avator, title, description }) {
  return (
    <div className="skills-card">
      <div className="skills-icon">
        <img src={avator} alt={title} />
      </div>
      <div className="skills-body">
        <h3 className="skills-card-title">{title}</h3>
        <h4 className="skills-description">{description}</h4>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section className="skills-section">
      <Title maintitle="technologies" />
      <div className="skills-card-container">
        <Skillscard
          avator={html}
          title="html"
          description="is the foundational language which i use to create and structure content on the web. It allows me to define the layout, elements, and overall structure of web pages by using a system of tags. As an essential web development skill, HTML enables me to build user interfaces, display text, images, links, and more, making it the backbone of my websites."
        />

        <Skillscard
          avator={nodejs}
          title="node js"
          description=" With Node.js, I can handle multiple connections concurrently, making it ideal for building real-time applications like chat apps, APIs, and web servers. Its event-driven, non-blocking I/O model ensures efficient performance, and it's widely used in full-stack development, especially in conjunction with frameworks like Express.js."
        />

        <Skillscard
          avator={css}
          title="css"
          description="With CSS, I can apply styles to HTML elements, including colors, fonts, spacing, and positioning. It allows me to create responsive designs that adapt to various screen sizes and devices using media queries. Mastery of CSS is essential for front-end development, enabling the creation of visually appealing, user-friendly interfaces. "
        />

        <Skillscard
          avator={js}
          title="javascript"
          description="It allows me to manipulate HTML and CSS, enabling complex user interactions, animations, data handling, and more. As a front-end development skill, JavaScript plays a critical role in building responsive websites and applications, often working alongside libraries and frameworks like React, Angular, and Vue.js. "
        />

        <Skillscard
          avator={php}
          title="php"
          description="As a PHP developer, you can build robust backend functionality, such as handling form submissions, managing sessions, and working with databases like MySQL. PHP is also widely used in content management systems (CMS) like WordPress, providing flexibility for developing scalable web applications. Mastery of PHP enables efficient server-side scripting and seamless integration with front-end technologies."
        />

        <Skillscard
          avator={react}
          title="react"
          description="It enables you to create reusable UI components that manage their own state, allowing for modular and efficient development. With React, you can handle complex UIs and efficiently update the DOM using a virtual DOM, improving app performance. React's component-based architecture and ecosystem, including hooks and state management libraries like Redux, make it an essential tool for building interactive, responsive web applications."
        />
      </div>
    </section>
  );
}
export default Skills;
