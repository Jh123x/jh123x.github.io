import * as React from "react";
import itemMap from "./iconMap";
import { IconType, LinkType } from "./types";
import { describe, expect, test } from "@jest/globals";
import { Box } from "@mui/material";
import { render } from "@testing-library/react";


describe("itemMap", () => {
  const tests: LinkType[] = [
    { link: "https://github.com", tooltip: "Github", iconType: IconType.github, },
    { link: "https://google.com", tooltip: "Google", iconType: IconType.google },
    { link: "https://apple.com", tooltip: "Apple", iconType: IconType.apple },
    { link: "https://google.com", tooltip: "Link", iconType: IconType.link },
    { link: "https://linkedin.com", tooltip: "LinkedIn", iconType: IconType.linkedin },
    { link: "https://youtube.com", tooltip: "YouTube", iconType: IconType.youtube },
    { link: "https://docs.com", tooltip: "Docs", iconType: IconType.docs },
  ];

  for (const link of tests) {
    test(`should render a ${link.iconType} icon`, () => {
      const wrapper = render(<Box>{itemMap(link)}</Box>,);
      expect(wrapper.asFragment()).toMatchSnapshot();
    });
  }
});
