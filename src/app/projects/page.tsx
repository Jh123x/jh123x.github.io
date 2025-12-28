import * as React from "react";
import { MainLayout, InnerLayout } from "../../styles/Layouts";
import Title from "../../Components/Title";
import projects from "../../data/portfolios";
import ProjectsMenu from "../../Components/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Side Projects that I have worked on",
  manifest: "/manifest.json",
};

const PortfoliosPage = () => (
  <MainLayout>
    <Title title={"Projects"} span={"Projects"} />
    <InnerLayout>
      <ProjectsMenu menuItem={projects} />
    </InnerLayout>
  </MainLayout>
);

export default PortfoliosPage;
