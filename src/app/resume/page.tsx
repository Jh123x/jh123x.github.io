import * as React from "react";
import Skills from "../../Components/Skills";
import Resume from "../../Components/Resume";
import { MainLayout } from "../../styles/Layouts";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Resume',
  description: 'Work, Skills & Education background',
  manifest: '/manifest.json',
}

const ResumePage = () => {
  return (
    <MainLayout>
      <Skills />
      <Resume />
    </MainLayout>
  );
};

export default ResumePage;
