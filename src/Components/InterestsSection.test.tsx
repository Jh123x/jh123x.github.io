import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import InterestSection from "./InterestsSection";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from "src/app/app";

describe("InterestSection", () => {
  test("should render correctly", () => {
    const component = render(
      <ThemeProvider theme={darkTheme}>
        <InterestSection />
      </ThemeProvider>,
    );
    expect(component.asFragment()).toMatchSnapshot();
  });
});
