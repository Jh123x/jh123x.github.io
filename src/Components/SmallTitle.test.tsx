import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import SmallTitle from "./SmallTitle";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from "src/app/app";

describe("Small Title", () => {
  test("should render correctly", () => {
    const component = render(
      <ThemeProvider theme={darkTheme}>
        <SmallTitle icon={<></>} title="Test Title" />
      </ThemeProvider>,
    );
    expect(component.asFragment()).toMatchSnapshot();
  });
});
