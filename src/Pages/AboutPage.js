import React from "react";
import styled from "styled-components";
import ImageSection from "../Components/ImageSection";
import Title from "../Components/Title";
import { MainLayout } from "../styles/Layouts";
import InterestsSection from "../Components/InterestsSection";

/**
 * AboutPage Component is the about page of the website.
 * @returns {React.JSX.Element}
 */
const AboutPage = () => (
  <MainLayout>
    <AboutStyled>
      <Title title={"About Me"} span={"About Me"} />
      <ImageSection />
      <InterestsSection />
    </AboutStyled>
  </MainLayout>
);

const AboutStyled = styled.section``;

export default AboutPage;
