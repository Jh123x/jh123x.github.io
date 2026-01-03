import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import AboutDescription from "./ImageSection";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from "src/app/app";

describe("ImageSection", () => {
  test("should render correctly", () => {
    const component = render(
      <ThemeProvider theme={darkTheme}>
        <AboutDescription />
      </ThemeProvider>,
    );
    expect(component.asFragment()).toMatchSnapshot();
  });
});
