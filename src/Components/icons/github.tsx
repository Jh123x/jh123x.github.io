import { GitHub } from "@mui/icons-material";
import { useTheme } from "@mui/material";
import Link from "next/link";
import { IconProps } from "./types";

export const GithubIcon = ({ href, ariaLabel }: IconProps) => {
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
