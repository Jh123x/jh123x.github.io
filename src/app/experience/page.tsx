import * as React from "react";
import Experience from "../../Components/Experience";
import { InnerLayout, MainLayout } from "../../styles/Layouts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work & Education",
  description: "Work, Skills & Education background",
  manifest: "/manifest.json",
};

const ExperiencePage = () => {
  return (
    <MainLayout>
      <InnerLayout>
        <Experience />
      </InnerLayout>
    </MainLayout>
  );
};

export default ExperiencePage;
