import * as React from "react";
import ExperiencePage from "./page";
import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from "../app";

describe("ResumePage Page", () => {
  test("should render correctly", () => {
    const page = render(
      <ThemeProvider theme={darkTheme}>
        <ExperiencePage />
      </ThemeProvider>,
    );
    expect(page.asFragment()).toMatchSnapshot();
  });
});
