import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import ProjectCard from "./ProjectCard";
import Icon from "../img/blog.svg";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from "../app/app";
import { type LinkType, IconType } from "../data/types";


const testLinks: LinkType[] = [
  { iconType: IconType.github, link: "https://github.com/test", tooltip: "Test GitHub" },
];

describe("ProjectCard", () => {
  test("should render correctly", () => {
    const component = render(
      <ThemeProvider theme={darkTheme}>
        <ProjectCard
          Title="Test"
          Description="Test Description"
          ImageSrc={Icon.src}
          Icons={testLinks}
          TechStack={["Stack1", "Stack2"]}
        />
      </ThemeProvider>,
    );
    expect(component.asFragment()).toMatchSnapshot();
  });
});
