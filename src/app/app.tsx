"use client";
import * as React from "react";
import { Brightness4, Menu as MenuIcon } from "@mui/icons-material";
import { Switch, IconButton } from "@mui/material";
import Sidebar from "src/Components/Sidebar";

const Nav = ({ children }: { children: React.ReactNode }) => {
    const [navToggle, setNavToggle] = React.useState(false);
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    React.useEffect(() => { document.documentElement.className = isDarkMode ? "light-theme" : "dark-theme" }, [isDarkMode]);

    return (
        <div className={`App ${isDarkMode ? "light-theme" : "dark-theme"}`}>
            <Sidebar navToggle={navToggle} />
            <div className="theme">
                <div className="light-dark-mode">
                    <div className="left-content">
                        <Brightness4 />
                    </div>
                    <div className="right-content">
                        <Switch
                            value=""
                            checked={isDarkMode}
                            inputProps={{ "aria-label": "" }}
                            size="medium"
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
                >
                    <MenuIcon />
                </IconButton>
            </div>
            {children}
        </div>
    );
};

export default Nav;