import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import Sidebar from "./Sidebar";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from "src/app/app";

describe("Sidebar", () => {
  test("should render correctly toggled", () => {
    const component = render(
      <ThemeProvider theme={darkTheme}>
        <Sidebar navToggle={true} setNavToggle={() => {}} />,
      </ThemeProvider>,
    );
    expect(component.asFragment()).toMatchSnapshot();
  });
  test("should render correctly untoggled", () => {
    const component = render(
      <ThemeProvider theme={darkTheme}>
        <Sidebar navToggle={false} setNavToggle={() => {}} />,
      </ThemeProvider>,
    );
  });
});
