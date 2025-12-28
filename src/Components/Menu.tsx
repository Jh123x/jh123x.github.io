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

function Menu({ menuItem }: { menuItem: Array<PortfolioEntry> }) {
  return (
    <Stack direction="column">
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
            height="400"
            loading="lazy"
            alt={item.title}
          />
          <CardContent sx={{ mb: 3, padding: "5%" }}>
            <Typography>{item.title}</Typography>
            <Stack direction="row" spacing={5}>
              {item.stack.map((badge, idx) => (
                <Chip label={badge} key={`${index}-${idx}`} />
              ))}
            </Stack>
            <Typography>{item.text}</Typography>
            <Stack direction="row">
              {Object.entries(item.links).map(mapItem)}
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}

export default Menu;
