"use client";

import * as React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { MainLayout } from "src/styles/Layouts";

const HomePage = () => {
  const theme = useTheme();
  return (
    <MainLayout padding="0">
      <Box
        className="typography"
        sx={{
          textAlign: "center",
          width: "80%",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            padding: 2,
          }}
        >
          Hi, I'm{" "}
          <span style={{ color: theme.palette.primary.main }}>Junhua</span>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.5,
            mb: 1,
            padding: 0,
            color: theme.palette.text.primary,
          }}
        >
          I am currently a <b>Backend Software Engineer</b> at Bytedance based
          in <b>Singapore</b>. I have {new Date().getFullYear() - 2023} years of
          experiences. On the side, I run a blog about my technical and personal
          adventures and work on side projects on my Github. I mainly work with
          Golang (for work), Python and TypeScript (for side projects).
        </Typography>
      </Box>
    </MainLayout>
  );
};

export default HomePage;
