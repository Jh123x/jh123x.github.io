import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import ExperienceItem from "./ExperienceItem";
import workExperience from "../data/workExperience";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from "src/app/app";

describe("Resume Items", () => {
  for (const experience of workExperience) {
    test(`should render a ${experience.title} item`, () => {
      const component = render(
        <ThemeProvider theme={darkTheme}>
          <ExperienceItem {...experience} />
        </ThemeProvider>,
      );
      expect(component.asFragment()).toMatchSnapshot();
    });
  }
});
