"use client";
import * as React from "react";
import { Grid, useTheme } from "@mui/material";
import type { WithChildren } from "src/Components/types";

interface MainLayoutProps extends WithChildren {
  padding?: string;
}

export const MainLayout = ({ children, padding }: MainLayoutProps) => {
  const theme = useTheme();
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        p: padding ?? "10%",
        boxSizing: "border-box",
        listStyle: "none",
        backgroundColor: theme.palette.background.default,
      }}
    >
      {children}
    </Grid>
  );
};

export const InnerLayout = (props: WithChildren) => {
  return (
    <Grid container spacing={0}>
      <Grid size={{ xs: 12 }} key={"single-child"}>
        {props.children}
      </Grid>
    </Grid>
  );
};
