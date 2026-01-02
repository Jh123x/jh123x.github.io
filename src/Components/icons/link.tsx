import Link from "next/link";
import { Link as LinkI } from "@mui/icons-material";
import { useTheme } from "@mui/material";
import { IconProps } from "./types";

export const LinkIcon = ({ href }: IconProps) => {
  const theme = useTheme();
  return (
    <Link href={href} aria-label="Blog">
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
