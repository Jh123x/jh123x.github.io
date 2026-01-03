import * as React from "react";
import AboutPage from "./page";
import { render } from "@testing-library/react";
import { describe, expect, test } from "@jest/globals";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from "../app";

describe("Render AboutPage", () => {
  test("renders AboutPage component", () => {
    const { asFragment } = render(
      <ThemeProvider theme={darkTheme}>
        <AboutPage />
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
