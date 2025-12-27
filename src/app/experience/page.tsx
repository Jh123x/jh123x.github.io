import * as React from "react";
import Resume from "../../Components/Resume";
import { MainLayout } from "../../styles/Layouts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work & Education",
  description: "Work, Skills & Education background",
  manifest: "/manifest.json",
};

const ResumePage = () => {
  return (
    <MainLayout>
      <Resume />
    </MainLayout>
  );
};

export default ResumePage;
