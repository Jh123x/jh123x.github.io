import * as React from "react";
import itemMap from "./iconMap";
import { IconTypes, LinkTypes } from "./types";
import { describe, expect, test } from "@jest/globals";
import { Box } from "@mui/material";

type testCase = [IconTypes, LinkTypes];

describe("itemMap", () => {
  const tests: testCase[] = [
    [
      IconTypes.github,
      { github: { link: "https://github.com", tooltip: "Github" } },
    ],
    [
      IconTypes.google,
      { google: { link: "https://google.com", tooltip: "Google" } },
    ],
    [
      IconTypes.apple,
      { apple: { link: "https://apple.com", tooltip: "Apple" } },
    ],
    [
      IconTypes.linkedin,
      { linkedin: { link: "https://linkedin.com", tooltip: "LinkedIn" } },
    ],
    [
      IconTypes.link,
      {
        link: { link: "https://google.com", tooltip: "Link" },
      },
    ],
    [
      IconTypes.youtube,
      { youtube: { link: "https://youtube.com", tooltip: "YouTube" } },
    ],
    [IconTypes.docs, { docs: { link: "https://docs.com", tooltip: "Docs" } }],
  ];

  for (const [icon, links] of tests) {
    test(`should render a ${icon} icon`, () => {
      const wrapper = (
        <Box>
          {Object.entries(links).map(([key, link]) => itemMap([icon, link]))}
        </Box>
      );
      expect(wrapper).toMatchSnapshot();
    });
  }
});
