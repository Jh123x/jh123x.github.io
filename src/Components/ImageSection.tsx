"use client";
import * as React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

const ImageSection = () => (
  <ImageSectionStyled>
    <div className="right-content">
      <Typography variant="h4">
        I am <span>Junhua</span>
      </Typography>
      <Typography variant="body2" className="paragraph">
        I specialize in in Backend Development. Beyond development, I am also
        interested in upcoming technologies such as <b>Machine Learning</b> and{" "}
        <b>Artificial Intelligence</b>. I participate in <b>CTFs</b> and run my{" "}
        <b>Home Lab</b> and <b>blogs</b> during my free time.
      </Typography>
      <div className="about-info">
        <div className="info-title">
          <p style={{ margin: 0, padding: "5px" }}>Full Name:</p>
          <p style={{ margin: 0, padding: "5px" }}>Nationality:</p>
          <p style={{ margin: 0, padding: "5px" }}>Languages:</p>
          <p style={{ margin: 0, padding: "5px" }}>Location:</p>
        </div>
        <div className="info">
          <p style={{ margin: 0, padding: "5px" }}>Wen Junhua</p>
          <p style={{ margin: 0, padding: "5px" }}>Singaporean </p>
          <p style={{ margin: 0, padding: "5px" }}>English, Chinese </p>
          <p style={{ margin: 0, padding: "5px" }}>Singapore</p>
        </div>
      </div>
    </div>
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
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
