import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import InterestCard from "./InterestCard";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";
import flag from "../img/flag.svg";
import blog from "../img/blog.svg";

const InterestsSection = () => (
  <InnerLayout>
    <InterestSectionStyled>
      <Title title="Interests" span="interests" />
      <div className="interests">
        <InterestCard image={design} title="Software Development" />
        <InterestCard image={intelligence} title="Home Lab" />
        <InterestCard image={gamedev} title="Cyber Security" />
        <InterestCard image={flag} title="CTFs" />
        <InterestCard image={blog} title="Tech Blog" />
      </div>
    </InterestSectionStyled>
  </InnerLayout>
);

const InterestSectionStyled = styled.section`
  .interests {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default InterestsSection;
