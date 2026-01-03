import * as React from "react";
import HomePage from "./page";
import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from "./app";

describe("Render HomePage", () => {
  test("renders HomePage component", () => {
    const homePage = render(
      <ThemeProvider theme={darkTheme}>
        <HomePage />
      </ThemeProvider>,
    );
    expect(homePage.asFragment()).toMatchSnapshot();
  });
});
