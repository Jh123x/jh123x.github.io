"use client";
import { GitHub } from "@mui/icons-material";
import { useTheme } from "@mui/material";
import Link from "next/link";
import type { IconElement, IconProps } from "./types";

export const GithubIcon: IconElement = ({
  href,
  ariaLabel,
}: IconProps): React.ReactNode => {
  const theme = useTheme();
  return (
    <Link href={href} aria-label={ariaLabel ?? "Github"} target="_blank">
      <GitHub
        sx={{
          color: theme.palette.text.primary,
          transition: "all 0.4s ease-in-out",
          "&:hover": {
            color: "#5f4687",
          },
        }}
      />
    </Link>
  );
};
