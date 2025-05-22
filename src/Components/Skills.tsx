"use client";
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
        <ProgressBar title="Python" width="90%" text="90%" />
        <ProgressBar title="Golang" width="100%" text="100%" />
        <ProgressBar title="Javascript" width="85%" text="85%" />
        <ProgressBar title="Typescript" width="90%" text="90%" />
        <ProgressBar title="Python" width="95%" text="95%" />
        <ProgressBar title="React" width="75%" text="75%" />
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
