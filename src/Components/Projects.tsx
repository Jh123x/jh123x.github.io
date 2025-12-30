"use client";
import * as React from "react";
import { PortfolioEntry } from "../data/types";
import { Stack } from "@mui/material";
import ProjectCard from "./ProjectCard";

function ProjectsMenu({ menuItem }: { menuItem: Array<PortfolioEntry> }) {
  return (
    <Stack direction="column" rowGap={"20px"}>
      {menuItem.map((item, index) => (
        <ProjectCard
          key={index}
          ImageSrc={item.image.src}
          ImageAlt={item.title}
          Title={item.title}
          Description={item.text}
          TechStack={item.stack}
          Icons={item.links}
        />
      ))}
    </Stack>
  );
}

export default ProjectsMenu;
