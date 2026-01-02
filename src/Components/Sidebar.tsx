"use client";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import * as React from "react";
import Navigation from "./Navigation";

interface SidebarProps {
  navToggle: boolean;
  setNavToggle: (showNav: boolean) => void;
}

const Sidebar = ({ navToggle, setNavToggle }: SidebarProps) => {
  const theme = useTheme();
  const isSmall = useMediaQuery("(max-width: 1200px)");
  return (
    <Box
      sx={{
        transform: navToggle
          ? "translateX(0)"
          : isSmall
            ? "translateX(-100%)"
            : "",
        transition: "all 0.3s ease-in-out",
        backgroundColor: theme.custom.cardBackground,
        width: "16.3rem",
        position: "fixed",
        height: "100vh",
        overflow: "hidden",
        zIndex: isSmall ? 20 : 0,
      }}
    >
      <Navigation setNav={setNavToggle} />
    </Box>
  );
};

export default Sidebar;
