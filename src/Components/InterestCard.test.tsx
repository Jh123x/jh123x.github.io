import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import InterestCard from "./InterestCard";
import gamedev from "../img/game-dev.svg";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from "src/app/app";
import { render } from "@testing-library/react";

describe("InterestCard", () => {
  test("should render correctly", () => {
    const component = render(
      <ThemeProvider theme={darkTheme}>
        <InterestCard
          image={gamedev}
          title="School Blog"
          href="https://nus.jh123x.com"
        />
      </ThemeProvider>,
    );
    expect(component.asFragment()).toMatchSnapshot();
  });
});
