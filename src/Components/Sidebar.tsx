"use client";
import { useTheme } from "@mui/material";
import * as React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

interface SidebarProps {
  navToggle: boolean;
  setNavToggle: (showNav: boolean) => void;
}

const Sidebar = ({ navToggle, setNavToggle }: SidebarProps) => {
  const theme = useTheme();
  return (
    <SidebarStyled
      style={{
        transform: navToggle ? "translateX(0)" : "",
        transition: "all 0.3s ease-in-out",
        backgroundColor: theme.palette.custom.cardBackground,
      }}
    >
      <Navigation setNav={setNavToggle} />
    </SidebarStyled>
  );
};

const SidebarStyled = styled.div`
  width: 16.3rem;
  position: fixed;
  height: 100vh;
  background-color: var(--sidebar-dark-color);
  overflow: hidden;
  @media screen and (max-width: 1200px) {
    transform: translateX(-100%);
    z-index: 20;
  }
`;

export default Sidebar;
