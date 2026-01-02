"use client";
import * as React from "react";
import ImageSection from "./ImageSection";
import Title from "./Title";
import InterestsSection from "./InterestsSection";
import { Box } from "@mui/material";

const About = () => (
  <Box
    sx={{
      p: 0,
      m: 0,
    }}
  >
    <Title title="About Me" />
    <ImageSection />
    <InterestsSection />
  </Box>
);

export default About;
