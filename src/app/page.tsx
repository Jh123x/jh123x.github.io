"use client";
import * as React from "react";
import styled from "styled-components";
import { GitHub, Link as LinkIcon, LinkedIn } from "@mui/icons-material";
import { Box, Tooltip, Typography } from "@mui/material";
import Link from "next/link";

const HomePage = () => (
  <HomePageStyled>
    <Box className="typography">
      <Typography
        variant="h1"
        sx={{
          fontWeight: "bold",
          padding: 2,
        }}
      >
        Hi, I'm{" "}
        <span
          style={{
            color: "var(--primary-color)",
          }}
        >
          Junhua
        </span>
      </Typography>
      <Typography
        variant="body1"
        sx={{
          lineHeight: 1.5,
          mb: 1,
          padding: 0,
        }}
      >
        I am currently a <b>Backend Software Engineer</b> at Bytedance based in{" "}
        <b>Singapore</b>. I have {new Date().getFullYear() - 2023} years of
        experiences. On the side, I run{" "}
        <Link href="https://jh123x.com">a blog</Link> about my technical and
        personal adventures and work on side projects on my{" "}
        <Link href="https://github.com/Jh123x">Github</Link>. I mainly work with
        Golang (for work), Python and TypeScript (for side projects).
      </Typography>
      <Box className="icons">
        <Link
          href="https://github.com/Jh123x"
          className="icon i-github"
          aria-label="Github"
        >
          <GitHub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/junhua-wen/"
          className="icon i-linkedin"
          aria-label="LinkedIn"
        >
          <LinkedIn />
        </Link>
        <Tooltip title="Blog">
          <Link
            href="https://jh123x.com"
            className="icon i-youtube"
            aria-label="Blog"
          >
            <LinkIcon />
          </Link>
        </Tooltip>
      </Box>
    </Box>
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
