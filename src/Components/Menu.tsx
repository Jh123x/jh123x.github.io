"use client";
import * as React from "react";
import { PortfolioEntry } from "../data/types";
import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import mapItem from "src/data/iconMap";

function ProjectsMenu({ menuItem }: { menuItem: Array<PortfolioEntry> }) {
  return (
    <Stack direction="column" rowGap={"20px"}>
      {menuItem.map((item, index) => (
        <Card
          key={index}
          sx={{
            maxWidth: "100%",
            boxShadow: 0,
            borderRadius: 3,
          }}
        >
          <CardMedia
            src={item.image.src}
            component="img"
            height="600px"
            loading="lazy"
            alt={item.title}
            sx={{
              objectFit: "contain",
              background: "#037fff4d",
            }}
          />
          <CardContent
            sx={{
              backgroundColor: "#037fff4d",
            }}
          >
            <Typography>{item.title}</Typography>
            <Stack direction="row" spacing={1}>
              {item.stack.map((badge, idx) => (
                <Chip label={badge} key={`${index}-${idx}`} />
              ))}
            </Stack>
            <Typography>{item.text}</Typography>
            <Stack direction="row" spacing={1}>
              {Object.entries(item.links).map(mapItem)}
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}

export default ProjectsMenu;
