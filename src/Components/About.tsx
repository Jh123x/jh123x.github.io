"use client";
import * as React from "react";
import styled from "styled-components";
import ImageSection from "./ImageSection";
import Title from "./Title";
import { MainLayout } from "../styles/Layouts";
import InterestsSection from "./InterestsSection";

const AboutComponent = () => (
  <MainLayout>
    <AboutStyled>
      <Title title="About Me" span="About Me" />
      <ImageSection />
      <InterestsSection />
    </AboutStyled>
  </MainLayout>
);

const AboutStyled = styled.section`
  margin: 0px;
  padding: 0px;
`;

export default AboutComponent;
