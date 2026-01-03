"use client";
import * as React from "react";
import * as types from "../data/types";
import { Box, Typography, useTheme } from "@mui/material";

const Title = ({ title }: types.Title) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        color: "#FFF",
        pb: "0.7rem",
        textTransform: "uppercase",
        mb: "0.7rem",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "7.4rem",
          height: "0.33rem",
          backgroundColor: theme.palette.primary.main,
          borderRadius: "15px",
          left: "0",
        }}
      />
      <Typography
        variant="h2"
        sx={{
          fontWeight: 600,
          fontSize: "3.1rem",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Title;
