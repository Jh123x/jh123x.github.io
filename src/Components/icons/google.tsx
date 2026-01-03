"use client";
import { Google } from "@mui/icons-material";
import { useTheme } from "@mui/material";
import Link from "next/link";
import type { IconElement, IconProps } from "./types";

export const GoogleIcon: IconElement = ({
  href,
  ariaLabel,
}: IconProps): React.JSX.Element => {
  const theme = useTheme();
  return (
    <Link href={href} aria-label={ariaLabel ?? "Google"} target="_blank">
      <Google
        sx={{
          color: theme.palette.text.primary,
          transition: "all 0.4s ease-in-out",
          "&:hover": { color: "#FFF" },
        }}
      />
    </Link>
  );
};
