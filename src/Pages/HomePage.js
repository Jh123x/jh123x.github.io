import React from "react";
import styled from "styled-components";
import { GitHub, Link, LinkedIn } from "@mui/icons-material";
import Particle from "../Components/Particle";
import { Tooltip } from "@mui/material";

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
        As a software engineer with a keen interest in cyber security, I strive
        to develop secure and reliable software. This portfolio showcases my
        skills and expertise in both fields.
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
        <Tooltip title="Blog site">
          <a href="https://jh123x.com" className="icon i-youtube">
            <Link />
          </a>
        </Tooltip>
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
