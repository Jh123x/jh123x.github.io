"use client";
import * as React from "react";
import styled from "styled-components";

const ProgressBar = ({ title, width, text }) => (
  <ProgressBarStyled>
    <h4 style={{
      fontSize: "1.5rem",
      paddingBottom: "0.6rem",
      color: "white",
    }}>{title}</h4>
    <div className="progress-bar">
      <p>{text}</p>
      <div className="progress">
        <span style={{ width: width }}></span>
      </div>
    </div>
  </ProgressBarStyled>
);

const ProgressBarStyled = styled.div`
  .progress-bar {
    display: flex;
    align-items: center;
    p {
      padding-right: 1.1rem;
    }
    .progress {
      position: relative;
      width: 100%;
      height: 0.4rem;
      background-color: var(--border-color);
      span {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 100%;
        background-color: var(--primary-color);
      }
    }
  }
`;

export default ProgressBar;
