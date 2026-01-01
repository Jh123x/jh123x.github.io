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
  useTheme,
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
  const isSmall: boolean = useMediaQuery("(max-width: 1200px)");
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          backgroundColor: darkTheme.palette.custom.cardBackground,
        }}
        className="dark-theme"
      >
        <Sidebar navToggle={navToggle} setNavToggle={setNavToggle} />
        <Box
          sx={{
            position: "absolute",
            right: "5%",
            top: "3%",
            display: isSmall ? "block" : "none",
            zIndex: 15,
          }}
        >
          <IconButton
            onClick={() => setNavToggle(!navToggle)}
            sx={{
              position: "absolute",
              right: 0,
              top: "50%",
              width: "4rem",
              height: "2rem",
              zIndex: 15,
              display: "flex",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
            aria-label="Toggle Sidebar"
          >
            <MenuIcon
              sx={{
                fontSize: "3rem",
              }}
            />
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
