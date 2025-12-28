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
            borderRadius: 3,
            padding: 0,
            margin: 0,
            backgroundColor: "#202435",
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
            }}
          />
          <CardContent>
            <Typography variant="subtitle1" align="center">
              {item.title}
            </Typography>
            <Typography variant="subtitle2" align="center">
              {item.text}
            </Typography>
            <Stack direction="column" spacing={1} alignItems={"center"}>
              <Stack direction="row" spacing={1}>
                {Object.entries(item.links).map(mapItem)}
              </Stack>
              <Stack direction="row" spacing={1}>
                {item.stack.map((badge, idx) => (
                  <Chip
                    label={badge}
                    color="primary"
                    key={`${index}-${idx}`}
                    sx={{
                      backgroundColor: "#10121A",
                      color: "white",
                    }}
                  />
                ))}
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}

export default ProjectsMenu;
