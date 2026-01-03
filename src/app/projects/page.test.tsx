import * as React from "react";
import PortfoliosPage from "./page";
import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from "../app";

describe("Portfolio Page", () => {
  test("should render correctly", () => {
    const page = render(
      <ThemeProvider theme={darkTheme}>
        <PortfoliosPage />
      </ThemeProvider>,
    );
    expect(page.asFragment()).toMatchSnapshot();
  });
});
