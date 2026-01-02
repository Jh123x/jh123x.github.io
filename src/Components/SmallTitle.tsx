"use client";
import { Box, Stack, Typography } from "@mui/material";
import * as React from "react";

interface SmallTitleProps {
  icon: React.JSX.Element;
  title: string;
}

const SmallTitle = ({ icon, title }: SmallTitleProps) => {
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        m: "1rem 0",
      }}
    >
      <Box
        sx={{
          pr: "1rem",
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="h3"
        sx={{
          color: "#FFF",
          fontSize: "2rem",
        }}
      >
        {title}
      </Typography>
    </Stack>
  );
};

export default SmallTitle;
