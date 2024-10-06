import {
  EducationStyled,
  EducationContainer,
  EducationDetail,
} from "../../styled/Education.styled";
function Education() {
  return (
    <EducationStyled id="Education">
      <div className="education-background">
        <h2>education background</h2>
        <EducationContainer>
          <h3>muranga university of technology</h3>
          <h4>
            <span>bachelors of science in computer science</span> second class
            upper division
          </h4>
          <EducationDetail>
            <p>
              I graduated with a Bachelor of Science in Computer Science from
              Muranga University of Technology, earning a Second Class Upper
              Division. Throughout my studies, I gained a solid understanding of
              software development, programming, and computational
              problem-solving. The program equipped me with practical skills in
              technologies like Python, React, and JavaScript, preparing me to
              tackle challenges in modern software development and contribute to
              innovative solutions in the tech industry.
            </p>
          </EducationDetail>
        </EducationContainer>
      </div>
    </EducationStyled>
  );
}

export default Education;
