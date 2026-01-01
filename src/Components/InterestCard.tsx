"use client";
import * as React from "react";
import styled from "styled-components";
import { InterestDescription } from "./types";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography } from "@mui/material";

const InterestCard = ({
  image,
  title,
  paragraph,
  href,
}: InterestDescription) => (
  <InterestCardStyled>
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={title}
      style={{
        textDecoration: "none",
      }}
    >
      <Box className="container">
        <Image src={image.src} width={100} height={100} alt={title} />
        <Typography
          variant="h4"
          sx={{
            color: "var(--white-color)",
            fontSize: "1.6em 0",
            padding: "1em 0",
            position: "relative",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            padding: "0.8rem 0",
          }}
        >
          {paragraph}
        </Typography>
      </Box>
    </Link>
  </InterestCardStyled>
);

const InterestCardStyled = styled.div`
  background-color: var(--background-dark-grey);
  border-left: 1px solid var(--border-color);
  border-top: 8px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  transition: all 0.4s ease-in-out;
  &:hover {
    border-top: 8px solid var(--primary-color);
    transform: translateY(3px);
  }
  .container {
    padding: 1.2rem;
    h4 {
      &::after {
        content: "";
        width: 4rem;
        background-color: var(--border-color);
        height: 3px;
        position: absolute;
        left: 0;
        bottom: 0;
        border-radius: 10px;
      }
    }
  }
`;

export default InterestCard;
