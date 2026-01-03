import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import Navigation from "./Navigation";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from "src/app/app";

describe("Navigation", () => {
  test("should render correctly", () => {
    const component = render(
      <ThemeProvider theme={darkTheme}>
        <Navigation setNav={() => {}} />
      </ThemeProvider>,
    );
    expect(component.asFragment()).toMatchSnapshot();
  });
});
