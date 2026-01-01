"use client";
import * as React from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { WithChildren } from "src/Components/types";

const HomePage = () => {
  const theme = useTheme();
  return (
    <HomePageLayout>
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
    </HomePageLayout>
  );
};

const HomePageLayout = ({ children }: WithChildren) => {
  const theme = useTheme();
  return (
    <Stack
      direction="column"
      sx={{
        width: "100%",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: theme.palette.background.default,
      }}
    >
      {children}
    </Stack>
  );
};

export default HomePage;
