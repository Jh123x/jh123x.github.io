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
import { Box, useTheme } from "@mui/material";
import { WithChildren } from "./types";

const Experiences = () => {
  const theme = useTheme();
  const briefcase = (
    <BusinessCenterIcon
      sx={{
        color: theme.palette.text.primary,
      }}
    />
  );
  const school = (
    <SchoolIcon
      sx={{
        color: theme.palette.text.primary,
      }}
    />
  );
  return (
    <ResumeStyled>
      <Title title={"Work & Education"} span={"Work & Education"} />
      <InnerLayout>
        <Box
          sx={{
            pb: "3rem",
          }}
        >
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
        <Box
          sx={{
            pb: "3rem",
            margin: 0,
            mt: "4rem",
          }}
        >
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </Box>
        <Box
          className="resume-content"
          sx={{
            borderLeft: `2px solid ${theme.palette.text.secondary}`,
          }}
        >
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

const ResumeStyled = ({ children }: WithChildren) => {
  return <Box>{children}</Box>;
};
styled.section`
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
