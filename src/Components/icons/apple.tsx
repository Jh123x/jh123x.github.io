"use client";
import { Apple } from "@mui/icons-material";
import { useTheme } from "@mui/material";
import Link from "next/link";
import type { IconElement, IconProps } from "./types";

export const AppleIcon: IconElement = ({
  href,
  ariaLabel,
}: IconProps): React.JSX.Element => {
  const theme = useTheme();
  return (
    <Link href={href} aria-label={ariaLabel ?? "Apple"} target="_blank">
      <Apple
        sx={{
          color: theme.palette.text.primary,
          transition: "all 0.4s ease-in-out",
          "&:hover": {
            color: "#1D1D1F",
          },
        }}
      />
    </Link>
  );
};
