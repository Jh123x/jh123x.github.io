"use client";
import * as React from "react";
import { Menu as MenuIcon } from "@mui/icons-material";
import {
  Box,
  createTheme,
  IconButton,
  Theme,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import Sidebar from "src/Components/Sidebar";

export interface NavProp {
  children: React.ReactNode;
}

const darkTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#007bff",
      dark: "#007bff",
      light: "#057FFF",
    },
    secondary: {
      main: "#6c757",
    },
    background: {
      default: "#10121A",
      paper: "#143158",
    },
    text: {
      primary: "#A4ACC4",
      secondary: "#313131",
    },
    custom: {
      border: "#2e344e",
      cardBackground: "#191d2b",
    },
  },
  typography: {
    allVariants: {
      color: "#FFF",
      fontFamily: "'Nunito', sans-serif",
    },
    h1: {
      fontSize: "4rem",
    },
    h6: {
      fontSize: "1.2rem",
      pb: ".6rem",
    },
  },
});

const Nav = ({ children }: NavProp) => {
  const [navToggle, setNavToggle] = React.useState(false);
  const isSmall = useMediaQuery("(max-width: 1200px)");
  return (
    <ThemeProvider theme={darkTheme}>
      <Box className="App dark-theme">
        <Sidebar navToggle={navToggle} setNavToggle={setNavToggle} />
        <Box className="ham-burger-menu">
          <IconButton
            onClick={() => setNavToggle(!navToggle)}
            className="light-dark-mode"
            style={{ position: "absolute" }}
            aria-label="Toggle Sidebar"
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            ml: isSmall ? 0 : "16.3rem",
            minHeight: "100vh",
          }}
        >
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Nav;
