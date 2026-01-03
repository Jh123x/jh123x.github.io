"use client";

import * as React from "react";
import InterestCard from "./InterestCard";
import { Grid } from "@mui/material";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import flag from "../img/flag.svg";
import blog from "../img/blog.svg";
import gamedev from "../img/game-dev.svg";

const InterestsSection = () => (
  <Grid
    container
    sx={{
      mt: "5rem",
      gridGap: "1.5rem",
      justifyContent: "space-evenly",
    }}
  >
    <Grid key="swe">
      <InterestCard
        image={design}
        title="Software Development"
        href="https://github.com/Jh123x"
      />
    </Grid>
    <Grid key="home-lab">
      <InterestCard
        image={intelligence}
        title="Home Lab"
        href="https://jh123x.com/blog/2023/home-lab/"
      />
    </Grid>
    <Grid key="ctfs">
      <InterestCard
        image={flag}
        title="CTFs"
        href="https://jh123x.com/tags/ctf/"
      />
    </Grid>
    <Grid key="blog">
      <InterestCard image={blog} title="Tech Blog" href="https://jh123x.com" />
    </Grid>
    <Grid key="nus-blog">
      <InterestCard
        image={gamedev}
        title="School Blog"
        href="https://nus.jh123x.com"
      />
    </Grid>
  </Grid>
);

export default InterestsSection;
