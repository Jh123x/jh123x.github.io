import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Stack,
  Box,
} from "@mui/material";
import { IconTypes, LinkTypes } from "src/data/types";
import mapItem from "src/data/iconMap";

interface ProjectProps {
  Title: string;
  Description: string;
  ImageSrc: string;
  Icons: LinkTypes;
  TechStack: string[];
  ImageAlt?: string;
}

export default function ProjectCard({
  ImageSrc,
  ImageAlt,
  Title,
  Description,
  Icons,
  TechStack,
}: ProjectProps) {
  return (
    <Card
      sx={{
        width: "300px",
        bgcolor: "#0B1220",
        color: "#E5E7EB",
        borderRadius: 3,
        boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
      }}
    >

      <CardMedia
        component="img"
        height="350px"
        image={ImageSrc}
        alt={ImageAlt}
        loading="lazy"
        sx={{
          objectFit: "contain",
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          width: "auto",
          margin: "auto",
          maxWidth: "100%",
        }}
      />
      <CardContent
        sx={{ height: "350px" }}
      >
        <Stack direction="column" spacing={3} sx={{ justifyContent: "space-between" }}>
          <Stack direction="row" spacing={{ justifyContent: "space-between" }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {Title}
            </Typography>
            <Stack direction="row" spacing={1}>
              {Object.entries(Icons).map(([iconType, links]) =>
                mapItem([iconType as IconTypes, links]),
              )}
            </Stack>
          </Stack>

          <Typography variant="body2" sx={{ color: "#9CA3AF", mb: 2 }}>
            {Description}
          </Typography>

          <Stack direction="row" spacing={1} flexWrap="wrap">
            {TechStack.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  bgcolor: "#111827",
                  color: "#D1D5DB",
                  fontSize: "0.75rem",
                  borderRadius: 2,
                }}
              />
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
