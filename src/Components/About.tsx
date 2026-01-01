"use client";
import * as React from "react";
import ImageSection from "./ImageSection";
import Title from "./Title";
import { MainLayout } from "../styles/Layouts";
import InterestsSection from "./InterestsSection";
import { WithChildren } from "./types";
import { Box } from "@mui/material";

const AboutComponent = () => (
  <MainLayout>
    <AboutLayout>
      <Title title="About Me" span="About Me" />
      <ImageSection />
      <InterestsSection />
    </AboutLayout>
  </MainLayout>
);

const AboutLayout = ({ children }: WithChildren) => (
  <Box
    sx={{
      p: 0,
      m: 0,
    }}
  >
    {children}
  </Box>
);

export default AboutComponent;
