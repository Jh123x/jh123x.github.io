"use client";
import { YouTube } from "@mui/icons-material";
import { useTheme } from "@mui/material";
import Link from "next/link";
import type { IconElement, IconProps } from "./types";

export const YoutubeIcon: IconElement = ({
  href,
  ariaLabel,
}: IconProps): React.JSX.Element => {
  const theme = useTheme();
  return (
    <Link href={href} aria-label={ariaLabel ?? "Youtube"} target="_blank">
      <YouTube
        sx={{
          color: theme.palette.text.primary,
          transition: "all 0.4s ease-in-out",
          "&:hover": {
            color: "#FF0000",
          },
        }}
      />
    </Link>
  );
};
