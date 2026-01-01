"use client";
import * as React from "react";
import { InterestDescription } from "./types";
import Image from "next/image";
import Link from "next/link";
import { Box, Stack, Typography, useTheme } from "@mui/material";

const InterestCard = ({
  image,
  title,
  paragraph,
  href,
}: InterestDescription) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        borderLeft: `1px solid ${theme.custom.border}`,
        borderTop: `8px solid var(--border-color)`,
        borderRight: `1px solid var(--border-color)`,
        borderBottom: `1px solid var(--border-color)`,
        transition: "all 0.4s ease-in-out",
        backgroundColor: theme.custom.cardBackground,
        "&:hover": {
          borderTop: `8px solid ${theme.palette.primary.main}`,
        },
      }}
    >
      <Stack
        sx={{
          padding: "1.2rem",
          justifyContent: "space-between",
        }}
      >
        <Link
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={title}
          style={{
            textDecoration: "none",
          }}
        >
          <Image src={image.src} width={100} height={100} alt={title} />
          <Typography
            variant="h6"
            sx={{
              color: "var(--white-color)",
              fontSize: "1.6em 0",
              padding: "1em 0",
              position: "relative",
            }}
          >
            {title}
          </Typography>
          <Typography variant="body1" sx={{ padding: 0 }}>
            {paragraph}
          </Typography>
          <Box
            sx={{
              p: 0,
              m: 0,
              width: "50%",
              height: "2px",
              borderRadius: "5px",
              backgroundColor: "var(--border-color)",
            }}
          ></Box>
        </Link>
      </Stack>
    </Box>
  );
};

export default InterestCard;
