"use client";

import * as React from "react";
import Title from "./Title";
import SmallTitle from "./SmallTitle";
import { BusinessCenter, School } from "@mui/icons-material";
import ExperienceItem from "./ExperienceItem";
import workExperience from "../data/workExperience";
import schExperience from "../data/schExperience";
import { Box, useTheme } from "@mui/material";

const Experiences = () => {
  const theme = useTheme();
  return (
    <>
      <Title title="Work & Education" />
      <Box
        sx={{
          pb: "3rem",
        }}
      >
        <SmallTitle
          icon={
            <BusinessCenter
              sx={{
                color: theme.palette.text.primary,
                fontSize: "3rem",
              }}
            />
          }
          title="Working Experience"
        />
      </Box>
      <Box>
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
            <School
              sx={{
                color: theme.palette.text.primary,
                fontSize: "3rem",
              }}
            />
          }
          title="Educational Qualifications"
        />
      </Box>
      <Box>
        {schExperience.map((experience) => (
          <ExperienceItem
            key={experience.title + experience.year}
            {...experience}
          />
        ))}
      </Box>
    </>
  );
};

export default Experiences;
