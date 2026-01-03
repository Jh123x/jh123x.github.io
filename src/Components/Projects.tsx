"use client";
import * as React from "react";
import { Grid } from "@mui/material";
import type { PortfolioEntry } from "../data/types";
import ProjectCard from "./ProjectCard";

const ProjectsMenu = ({ menuItem }: { menuItem: Array<PortfolioEntry> }) => {
  return (
    <Grid
      container
      style={{
        padding: 0,
        margin: 0,
        width: "100%",
        justifyContent: "space-evenly",
        fontSize: 0,
      }}
    >
      {menuItem.map((item, index) => (
        <Grid key={index}>
          <ProjectCard
            key={index}
            ImageSrc={item.image.src}
            ImageAlt={item.title}
            Title={item.title}
            Description={item.text}
            TechStack={item.stack}
            Icons={item.links}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectsMenu;
