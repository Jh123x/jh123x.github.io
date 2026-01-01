import { YouTube } from "@mui/icons-material";
import { useTheme } from "@mui/material";
import Link from "next/link";
import { IconProps } from "./types";

export const YoutubeIcon = ({ href }: IconProps) => {
  const theme = useTheme();
  return (
    <Link href={href} aria-label="Blog">
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
