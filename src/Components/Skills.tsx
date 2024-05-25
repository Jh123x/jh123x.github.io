import * as React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import ProgressBar from "./ProgressBar";

const Skills = () => (
  <SkillsStyled>
    <Title title={"My Skills"} span={"my skills"} />
    <InnerLayout>
      <div className="skills">
        <ProgressBar title={"Python"} width={"90%"} text={"90%"} />
        <ProgressBar title={"Golang"} width={"100%"} text={"100%"} />
        <ProgressBar title={"JAVASCRIPT"} width={"85%"} text={"85%"} />
        <ProgressBar title={"Django"} width={"90%"} text={"90%"} />
        <ProgressBar title={"PYTHON"} width={"95%"} text={"95%"} />
        <ProgressBar title={"React JS"} width={"75%"} text={"75%"} />
        <ProgressBar title={"Flask"} width={"70%"} text={"70%"} />
      </div>
    </InnerLayout>
  </SkillsStyled>
);

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Skills;
