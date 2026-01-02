import { Metadata } from "next";
import About from "src/Components/About";
import { MainLayout } from "src/styles/Layouts";

export const metadata: Metadata = {
  title: "About",
  description: "More about me outside of my portfolio and projects.",
  manifest: "/manifest.json",
};

const AboutPage = () => (
  <MainLayout>
    <About></About>
  </MainLayout>
);

export default AboutPage;
