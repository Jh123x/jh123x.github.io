"use client";
import * as React from "react";
import {
  Box,
  Stack,
  SxProps,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";

const ImageSection = () => {
  const theme = useTheme();
  const infoStyle: SxProps<Theme> = {
    margin: 0,
    padding: "0.3rem 0",
    lineHeight: 1.5,
    color: theme.palette.text.primary,
  };
  return (
    <>
      <Box sx={{ width: "100%", pt: "5rem", pb: "5rem" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            pb: "2rem",
          }}
        >
          I am{" "}
          <span
            style={{
              color: theme.palette.primary.main,
            }}
          >
            Junhua
          </span>
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.text.primary,
            p: "1rem 0",
          }}
        >
          I specialize in in Backend Development. Beyond development, I am also
          interested in upcoming technologies such as <b>Machine Learning</b>{" "}
          and <b>Artificial Intelligence</b>. I participate in <b>CTFs</b> and
          run my <b>Home Lab</b> and <b>blogs</b> during my free time.
        </Typography>
        <Stack
          direction="column"
          sx={{
            pb: "1.4rem",
          }}
        >
          <Stack direction="row">
            <Typography
              variant="h6"
              sx={{
                ...infoStyle,
                fontWeight: "600",
                pr: "5px",
                color: theme.palette.secondary.main,
              }}
            >
              Full Name:
            </Typography>
            <Typography variant="h6" sx={infoStyle}>
              Wen Junhua
            </Typography>
          </Stack>
          <Stack direction="row">
            <Typography
              variant="h6"
              sx={{
                ...infoStyle,
                fontWeight: "600",
                pr: "5px",
                color: theme.palette.secondary.main,
              }}
            >
              Nationality:
            </Typography>
            <Typography variant="h6" sx={infoStyle}>
              Singaporean
            </Typography>
          </Stack>
          <Stack direction="row">
            <Typography
              variant="h6"
              sx={{
                ...infoStyle,
                fontWeight: "600",
                pr: "5px",
                color: theme.palette.secondary.main,
              }}
            >
              Languages:
            </Typography>
            <Typography variant="h6" sx={infoStyle}>
              English, Chinese (Simplified)
            </Typography>
          </Stack>
          <Stack direction="row">
            <Typography
              variant="h6"
              sx={{
                ...infoStyle,
                fontWeight: "600",
                pr: "5px",
                color: theme.palette.secondary.main,
              }}
            >
              Location:
            </Typography>
            <Typography variant="h6" sx={infoStyle}>
              Singapore
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default ImageSection;
