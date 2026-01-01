"use client";
import { Grid } from "@mui/material";
import * as React from "react";
import { PortfolioEntry } from "../data/types";
import ProjectCard from "./ProjectCard";

function ProjectsMenu({ menuItem }: { menuItem: Array<PortfolioEntry> }) {
  return (
    <Grid container xs={12} m={6} lg={4} sx={{ padding: 0 }}>
      {menuItem.map((item, index) => (
        <Grid item key={index}>
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
