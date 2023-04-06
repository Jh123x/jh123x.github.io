import React from "react";
import styled from "styled-components";
import { GitHub, Link, LinkedIn } from "@mui/icons-material";
import Particle from "../Components/Particle";

const HomePage = () => (
  <HomePageStyled>
    <div className="particle-con">
      <Particle />
    </div>
    <div className="typography">
      <h1>
        Hi, I'm <span>Junhua</span>
      </h1>
      <p>
        I am a backend developer who is passionate about building robust
        software, solving problems and doing CTFs.
        <br />
        To see my journey in the tech industry, please visit my blog <a href="https://jh123x.com">here</a>!
      </p>
      <div className="icons">
        <a href="https://github.com/Jh123x" className="icon i-github">
          <GitHub />
        </a>
        <a
          href="https://www.linkedin.com/in/junhua-wen/"
          className="icon i-linkedin"
        >
          <LinkedIn />
        </a>
        <a href="https://jh123x.com" className="icon i-youtube">
          <Link />
        </a>
      </div>
    </div>
  </HomePageStyled>
);

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;

export default HomePage;
