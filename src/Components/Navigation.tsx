"use client";
import * as React from "react";
import avatar from "../img/avatar.png";
import Image from "next/image";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { WithChildren } from "./types";
import { StyledLink } from "./Link";
import { GithubIcon } from "./icons/github";
import { LinkIcon } from "./icons/link";
import { LinkedinIcon } from "./icons/linkedin";

enum MenuItem {
  Home = "/",
  Experience = "/experience",
  Projects = "/projects",
  About = "/about",
}

interface NavigationProps {
  setNav: (showNav: boolean) => void;
}

const Navigation = ({ setNav }: NavigationProps) => {
  const theme = useTheme();
  return (
    <NavigationLayout>
      <Box
        className="avatar"
        sx={{
          width: "100%",
          borderBottom: `1px solid ${theme.custom.border}`,
          textAlign: "center",
          padding: "1rem 0",
          img: {
            height: "auto",
            width: "75%",
            borderRadius: "50%",
            border: `8px solid ${theme.custom.border}`,
            transition: "all 0.4s ease-in-out",
          },
        }}
      >
        <Image src={avatar.src} width={200} height={200} alt="Avatar" />
      </Box>
      <Stack
        sx={{
          margin: "0px",
          padding: "0px",
          width: "100%",
          textAlign: "center",
        }}
        spacing={0}
      >
        <NavItem name="Home" path={MenuItem.Home} setNav={setNav} />
        <NavItem name="Experience" path={MenuItem.Experience} setNav={setNav} />
        <NavItem name="Projects" path={MenuItem.Projects} setNav={setNav} />
        <NavItem name="About" path={MenuItem.About} setNav={setNav} />
      </Stack>
      <Box>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            p: 1,
            justifyContent: "center",
          }}
        >
          <GithubIcon href="https://github.com/Jh123x" />
          <LinkedinIcon href="https://www.linkedin.com/in/junhua-wen/" />
          <LinkIcon href="https://jh123x.com/" />
        </Stack>
        <Box
          sx={{
            borderTop: `1px solid ${theme.custom.border}`,
            width: "100%",
            display: "block",
            textAlign: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              p: "1.3rem 0",
              color: theme.palette.text.primary,
            }}
          >
            @{new Date().getFullYear()} <b>Wen Junhua</b>
          </Typography>
        </Box>
      </Box>
    </NavigationLayout>
  );
};

interface NavItemProps {
  name: string;
  path: MenuItem;
  setNav: (showNav: boolean) => void;
}

const NavItem = ({ name, path, setNav }: NavItemProps): React.JSX.Element => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "5px 0",
        margin: 0,
        color: theme.palette.text.primary,
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          color: "#FFF",
          backgroundColor: theme.palette.background.paper,
        },
      }}
    >
      <StyledLink href={path} aria-label={name} onClick={() => setNav(false)}>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              p: 0,
              m: 0,
              fontWeight: 600,
              letterSpacing: "1px",
              color: theme.palette.text.primary,
              "&:hover": {
                color: "#FFF",
              },
            }}
          >
            {name.toUpperCase()}
          </Typography>
        </Box>
      </StyledLink>
    </Box>
  );
};

const NavigationLayout = ({ children }: WithChildren) => {
  const theme = useTheme();
  return (
    <Stack
      direction="column"
      sx={{
        m: 0,
        p: 0,
        justifyContent: "space-between",
        height: "100%",
        width: "100%",
        borderRight: `1px solid ${theme.custom.border}`,
      }}
    >
      {children}
    </Stack>
  );
};

export default Navigation;
