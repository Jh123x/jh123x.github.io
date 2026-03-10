import * as React from "react";
import { InnerLayout, MainLayout } from "../../styles/Layouts";
import Title from "../../Components/Title";
import portfolios from "../../data/portfolios";
import Projects from "../../Components/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Side Projects that I have worked on",
  manifest: "/manifest.json",
};

const PortfoliosPage = () => {
  return <MainLayout>
    <InnerLayout>
      <Title title="Projects" />
      <Projects menuItem={portfolios} />
    </InnerLayout>
  </MainLayout>
};

export default PortfoliosPage;
