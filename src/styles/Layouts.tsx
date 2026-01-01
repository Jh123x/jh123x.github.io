"use client";
import * as React from "react";
import { Grid, useTheme } from "@mui/material";
import { WithChildren } from "src/Components/types";

export const MainLayout = ({ children }: WithChildren) => {
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
        p: "10%",
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
      <Grid item xs={12} key={"single-child"}>
        {props.children}
      </Grid>
    </Grid>
  );
};
