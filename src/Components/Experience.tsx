"use client";

import * as React from "react";
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

const Experiences = () => {
  const theme = useTheme();
  return (
    <>
      <Title title="Work & Education" />
      <InnerLayout>
        <Box
          sx={{
            pb: "3rem",
          }}
        >
          <SmallTitle
            icon={
              <BusinessCenterIcon
                sx={{
                  color: theme.palette.text.primary,
                  fontSize: "3rem",
                }}
              />
            }
            title="Working Experience"
          />
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
          <SmallTitle
            icon={
              <SchoolIcon
                sx={{
                  color: theme.palette.text.primary,
                  fontSize: "3rem",
                }}
              />
            }
            title="Educational Qualifications"
          />
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
    </>
  );
};

export default Experiences;
