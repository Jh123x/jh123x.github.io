"use client";
import * as React from "react";
import Skills from "../../Components/Skills";
import Resume from "../../Components/Resume";
import { MainLayout } from "../../styles/Layouts";

const ResumePage = () => {
  return (
    <MainLayout>
      <Skills />
      <Resume />
    </MainLayout>
  );
};

export default ResumePage;
