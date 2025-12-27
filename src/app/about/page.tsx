import { Metadata } from "next";
import AboutComponent from "src/Components/About";

export const metadata: Metadata = {
  title: "About",
  description: "More about me outside of my portfolio and projects.",
  manifest: "/manifest.json",
};

const AboutPage = () => <AboutComponent></AboutComponent>;

export default AboutPage;
