import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import ProjectsMenu from "./Projects";
import portfolios from "../data/portfolios";
import { render } from "@testing-library/react";
import { darkTheme } from "src/app/app";
import { ThemeProvider } from "@mui/material";

describe("Menu", () => {
  test("should render correctly portfolio", () => {
    const component = render(
      <ThemeProvider theme={darkTheme}>
        <ProjectsMenu menuItem={portfolios} />
      </ThemeProvider>,
    );
    expect(component.asFragment()).toMatchSnapshot();
  });
});
