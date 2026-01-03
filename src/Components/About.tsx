"use client";

import * as React from "react";
import AboutDescription from "./ImageSection";
import Title from "./Title";
import InterestsSection from "./InterestsSection";

const About = () => (
  <>
    <Title title="About Me" />
    <AboutDescription />
    <Title title="Interests" />
    <InterestsSection />
  </>
);

export default About;
