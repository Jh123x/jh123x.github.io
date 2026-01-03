"use client";
import Link from "next/link";
import { Link as LinkI } from "@mui/icons-material";
import { useTheme } from "@mui/material";
import type { IconElement, IconProps } from "./types";

export const LinkIcon: IconElement = ({
  href,
  ariaLabel,
}: IconProps): React.JSX.Element => {
  const theme = useTheme();
  return (
    <Link href={href} aria-label={ariaLabel ?? "Link"} target="_blank">
      <LinkI
        sx={{
          color: theme.palette.text.primary,
          transition: "all 0.4s ease-in-out",
          "&:hover": {
            color: "#FFF",
          },
        }}
      />
    </Link>
  );
};
