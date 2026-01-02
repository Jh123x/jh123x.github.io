import * as React from "react";
import itemMap from "../data/iconMap";
import { Entry, IconTypes } from "../data/types";
import Image from "next/image";
import { Stack, Typography, Box, useTheme } from "@mui/material";
import { Circle } from "@mui/icons-material";
import { WithChildren } from "./types";

const ExperienceItem = ({
  year,
  title,
  subTitle,
  text,
  logo,
  link,
}: Entry): React.JSX.Element => {
  const theme = useTheme();
  return (
    <ResumeItem>
      <Box
        sx={{
          width: "20%",
          paddingLeft: "20px",
          position: "relative",
        }}
      >
        <Circle
          sx={{
            position: "absolute",
            left: "-8.5px",
            top: "5px",
            height: "15px",
            width: "15px",
            color: theme.palette.background.default,
            border: "1px solid",
            borderRadius: "50%",
            borderColor: theme.custom.border,
          }}
        />
        <Typography
          variant="body2"
          sx={{
            display: "inline-block",
            padding: "3px",
            margin: 0,
            fontSize: "15px",
            color: theme.palette.text.primary,
          }}
        >
          {year}
        </Typography>
      </Box>
      <Box className="right-content" width="70%" marginLeft="10%">
        <Image src={logo.src} width={100} height={100} alt={subTitle} />
        <Typography
          variant="h5"
          sx={{
            padding: "0 0.4 0 0",
            margin: 0,
            color: theme.palette.primary.main,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            padding: "0 0.6rem 0 0",
            margin: 0,
          }}
        >
          {subTitle}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: 2,
            marginTop: 1,
            color: theme.palette.text.primary,
          }}
        >
          {text}
        </Typography>
        {link ? (
          <Stack direction="row" spacing={1}>
            {Object.entries(link).map(([iconType, link]) =>
              itemMap([iconType as IconTypes, link]),
            )}
          </Stack>
        ) : (
          <></>
        )}
      </Box>
    </ResumeItem>
  );
};

const ResumeItem = ({ children }: WithChildren) => {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      sx={{
        borderLeft: `2px solid ${theme.custom.border}`,
        padding: 0,
        margin: 0,
        "&:not(:last-child)": {
          pb: "3rem",
        },
      }}
    >
      {children}
    </Stack>
  );
};

export default ExperienceItem;
