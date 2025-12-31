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
  },
});

const Nav = ({ children }: NavProp) => {
  const [navToggle, setNavToggle] = React.useState(false);
  return (
    <ThemeProvider theme={darkTheme}>
      <Box className="App dark-theme">
        <Sidebar navToggle={navToggle} setNavToggle={setNavToggle}/>
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
  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default Nav;
