import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import { MainLayout, InnerLayout } from "./Layouts";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from "src/app/app";

describe("MainLayout", () => {
  test("should render correctly", () => {
    const mainLayout = render(
      <ThemeProvider theme={darkTheme}>
        <MainLayout />
      </ThemeProvider>,
    );
    expect(mainLayout.asFragment()).toMatchSnapshot();
  });
});

describe("InnerLayout", () => {
  test("should render correctly", () => {
    const innerLayout = render(
      <ThemeProvider theme={darkTheme}>
        <InnerLayout />
      </ThemeProvider>,
    );
    expect(innerLayout.asFragment()).toMatchSnapshot();
  });
});
