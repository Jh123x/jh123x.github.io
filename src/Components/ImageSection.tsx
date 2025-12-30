"use client";
import * as React from "react";
import styled from "styled-components";
import { Box, SxProps, Theme, Typography } from "@mui/material";

const infoStyle: SxProps<Theme> = {
  margin: 0,
  padding: "0.3rem 0",
  lineHeight: 1.5,
};

const ImageSection = () => (
  <ImageSectionStyled>
    <Box className="right-content">
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
        }}
      >
        I am{" "}
        <span
          style={{
            color: "var(--primary-color)",
          }}
        >
          Junhua
        </span>
      </Typography>
      <Typography variant="body2" className="paragraph">
        I specialize in in Backend Development. Beyond development, I am also
        interested in upcoming technologies such as <b>Machine Learning</b> and{" "}
        <b>Artificial Intelligence</b>. I participate in <b>CTFs</b> and run my{" "}
        <b>Home Lab</b> and <b>blogs</b> during my free time.
      </Typography>
      <Box className="about-info">
        <Box className="info-title">
          <Typography sx={infoStyle}>Full Name:</Typography>
          <Typography sx={infoStyle}>Nationality:</Typography>
          <Typography sx={infoStyle}>Languages:</Typography>
          <Typography sx={infoStyle}>Location:</Typography>
        </Box>
        <Box className="info">
          <Typography sx={infoStyle}>Wen Junhua</Typography>
          <Typography sx={infoStyle}>Singaporean</Typography>
          <Typography sx={infoStyle}>English, Chinese (Simplified)</Typography>
          <Typography sx={infoStyle}>Singapore</Typography>
        </Box>
      </Box>
    </Box>
  </ImageSectionStyled>
);

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 70%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
    }
  }
`;
export default ImageSection;
