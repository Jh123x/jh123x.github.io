import * as React from "react";
import styled from "styled-components";
import itemMap from "../data/iconMap";
import { Entry, IconTypes } from "../data/types";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";

const ExperienceItem = ({ year, title, subTitle, text, logo, link }: Entry) => (
  <ResumeItemStyled>
    <div className="left-content">
      <p>{year}</p>
    </div>
    <div className="right-content">
      {logo !== undefined ? (
        <Image src={logo.src} width={100} height={100} alt={subTitle} />
      ) : (
        <></>
      )}
      <Typography
        variant="h5"
        sx={{
          padding: 0,
          margin: 0,
        }}
      >
        {title}
      </Typography>
      <h6>{subTitle}</h6>
      <p>{text}</p>
      {link ? (
        <Stack direction="row" spacing={1}>
          {Object.entries(link).map(([iconType, link]) =>
            itemMap([iconType as IconTypes, link]),
          )}
        </Stack>
      ) : (
        <></>
      )}
    </div>
  </ResumeItemStyled>
);

const ResumeItemStyled = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px;
  margin: 0px;
  @media screen and (max-width: 421px) {
    p,
    h5,
    h6 {
      font-size: 80%;
      padding: 0;
      margin: 0;
    }
  }
  &:not(:last-child) {
    padding-bottom: 3rem;
  }
  .left-content {
    width: 50%;
    padding-left: 20px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: -10px;
      top: 5px;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: 2px solid var(--border-color);
      background-color: var(--background-dark-color);
    }
    p {
      display: inline-block;
      padding: 3px;
      margin: 0;
    }
  }
  .right-content {
    padding-right: 5rem;
    position: relative;
    max-width: 60%;

    &::before {
      content: "";
      top: 15px;
      height: 2px;
      width: 3rem;
      padding: 0px;
      margin: 0px;
      background-color: var(--border-color);
    }
    h5 {
      color: var(--primary-color);
      font-size: 1.5rem;
      padding: 0 0.4 0 0;
      margin: 0px;
    }
    h6 {
      padding: 0 0.6rem 0 0;
      margin: 0px;
      font-size: 1rem;
    }
  }
`;
export default ExperienceItem;
