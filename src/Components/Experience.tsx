"use client";

import * as React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import SmallTitle from "./SmallTitle";
import {
  BusinessCenter as BusinessCenterIcon,
  School as SchoolIcon,
} from "@mui/icons-material";
import ExperienceItem from "./ExperienceItem";
import workExperience from "../data/workExperience";
import schExperience from "../data/schExperience";
import { Box } from "@mui/material";

const Experiences = () => {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Work & Education"} span={"Work & Education"} />
      <InnerLayout>
        <Box className="small-title">
          <SmallTitle icon={briefcase} title={"Working Experience"} />
        </Box>
        <Box className="resume-content">
          {workExperience.map((experience) => (
            <ExperienceItem
              key={experience.title + experience.year}
              {...experience}
            />
          ))}
        </Box>
        <Box className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </Box>
        <Box className="resume-content ">
          {schExperience.map((experience) => (
            <ExperienceItem
              key={experience.title + experience.year}
              {...experience}
            />
          ))}
        </Box>
      </InnerLayout>
    </ResumeStyled>
  );
};

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin: 0px;
    margin-top: 4rem;
  }
  .resume-content {
    border-left: 2px solid var(--border-color);
    padding: 0px;
    margin: 0px;
  }
`;
export default Experiences;
