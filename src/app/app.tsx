"use client";
import * as React from "react";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Box, createTheme, IconButton, ThemeProvider } from "@mui/material";
import Sidebar from "src/Components/Sidebar";
import styled from "styled-components";

export interface NavProp {
  children: React.ReactNode;
}

const darkTheme = createTheme({
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
        <MainContentStyled>{children}</MainContentStyled>
      </Box>
    </ThemeProvider>
  );
};

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
`;

export default Nav;
