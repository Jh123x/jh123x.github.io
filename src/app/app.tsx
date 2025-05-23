"use client";
import * as React from "react";
import { Brightness6, Menu as MenuIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Sidebar from "src/Components/Sidebar";
import styled from "styled-components";
import { AntSwitch } from "src/Components/Switch";

const loadMode = (key: string): boolean => {
    const item = window.sessionStorage.getItem(key);
    return item != null ? !!JSON.parse(item) : false;
}

const Nav = ({ children }: { children: React.ReactNode }) => {
    const [navToggle, setNavToggle] = React.useState(false);
    const [isDarkMode, setIsDarkMode] = React.useState(loadMode('is_dark_mode'));

    React.useEffect(() => {
        document.documentElement.className = isDarkMode ? "light-theme" : "dark-theme"
        window.sessionStorage.setItem('is_dark_mode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    return (
        <div className={`App ${isDarkMode ? "light-theme" : "dark-theme"}`}>
            <Sidebar navToggle={navToggle} />
            <div className="theme" id="theme-toggle">
                <div className="light-dark-mode">
                    <div className="left-content">
                        <Brightness6 />
                    </div>
                    <div className="right-content">
                        <AntSwitch
                            value=""
                            id="test"
                            style={{ padding: "1px" }}
                            checked={isDarkMode}
                            inputProps={{ "aria-label": "" }}
                            onClick={() => setIsDarkMode(!isDarkMode)}
                        />
                    </div>
                </div>
            </div>
            <div className="ham-burger-menu">
                <IconButton
                    onClick={() => setNavToggle(!navToggle)}
                    className="light-dark-mode"
                    style={{ position: "absolute" }}
                    aria-label="Toggle Sidebar"
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