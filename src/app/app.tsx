"use client";
import * as React from "react";
import { Brightness4, Menu as MenuIcon } from "@mui/icons-material";
import { Switch, IconButton, ToggleButtonGroup, ToggleButton } from "@mui/material";
import Sidebar from "src/Components/Sidebar";
import styled from "styled-components";

const Nav = ({ children }: { children: React.ReactNode }) => {
    const [navToggle, setNavToggle] = React.useState(false);
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    React.useEffect(() => { document.documentElement.className = isDarkMode ? "light-theme" : "dark-theme" }, [isDarkMode]);

    return (
        <div className={`App ${isDarkMode ? "light-theme" : "dark-theme"}`}>
            <Sidebar navToggle={navToggle} />
            <div className="theme">
                <div className="light-dark-mode">
                    <ToggleButtonGroup
                        color="primary"
                        value={isDarkMode}
                        exclusive
                        onChange={() => setIsDarkMode(!isDarkMode)}
                        aria-label="Platform">
                        <ToggleButton value={true}><Brightness4 className={isDarkMode ? "light-theme" : "dark-theme"} /></ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </div>
            <div className="ham-burger-menu">
                <IconButton
                    onClick={() => setNavToggle(!navToggle)}
                    className="light-dark-mode"
                    style={{ position: "absolute" }}
                >
                    <MenuIcon />
                </IconButton>
            </div>

            <MainContentStyled>
                {children}
            </MainContentStyled>
        </div>
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