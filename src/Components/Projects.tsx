"use client";
import * as React from "react";
import { PortfolioEntry } from "../data/types";
import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";

function ProjectsMenu({ menuItem }: { menuItem: Array<PortfolioEntry> }) {
  return (
    <Grid
      container
      spacing={5}
    >
      {menuItem.map((item, index) => (
        <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={index}>
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
}

export default ProjectsMenu;
