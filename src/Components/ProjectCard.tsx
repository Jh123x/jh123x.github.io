import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Stack,
  Grid,
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
        width: "350px",
        bgcolor: "#0B1220",
        borderRadius: 3,
        padding: "5px",
        m: "5px",
        verticalAlign: "top",
      }}
    >
      <CardMedia
        component="img"
        image={ImageSrc}
        alt={ImageAlt}
        loading="lazy"
        sx={{
          objectFit: "contain",
          maxWidth: "100%",
          height: "300px",
        }}
      />
      <CardContent>
        <Stack
          direction="column"
          spacing={2}
          height="200px"
          sx={{
            justifyContent: "space-between",
          }}
        >
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

          <Grid container spacing={1}>
            {TechStack.map((tech, index) => (
              <Grid item key={index}>
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  sx={{
                    padding: 0,
                    margin: 0,
                    bgcolor: "#111827",
                    color: "#D1D5DB",
                    fontSize: "0.75rem",
                    borderRadius: 2,
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </CardContent>
    </Card>
  );
}
