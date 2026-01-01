import { Google } from "@mui/icons-material";
import { useTheme } from "@mui/material";
import Link from "next/link";
import { IconProps } from "./types";

export const GoogleIcon = ({ href, ariaLabel }: IconProps) => {
  const theme = useTheme();
  return (
    <Link href={href} aria-label={ariaLabel ?? "Google"}>
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
