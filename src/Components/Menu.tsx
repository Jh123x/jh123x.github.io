"use client";
import * as React from "react";
import { PortfolioEntry } from "../data/types";
import { Card, CardContent, CardMedia, Chip, Stack } from "@mui/material";
import mapItem from "src/data/iconMap";

function Menu({ menuItem }: { menuItem: Array<PortfolioEntry> }) {
  return (
    <Stack direction="column" spacing={10}>
      {menuItem.map((item, index) => (
        <Card
          key={index}
          sx={{
            background: "grey",
            backdropFilter: "blur(5px)",
            borderRadius: "16px",
            padding: "20px",
            boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
          }}
        >
          <CardMedia
            src={item.image.src}
            component="img"
            height="400"
            alt={item.title}
          />
          <CardContent>
            <h6>{item.title}</h6>
            <Stack direction="row" spacing={5}>
              {item.stack.map((badge, idx) => (
                <Chip label={badge} key={`${index}-${idx}`} />
              ))}
            </Stack>
            <p>{item.text}</p>
            <Stack direction="row" spacing={5}>
              {Object.entries(item.links).map(mapItem)}
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}

export default Menu;
