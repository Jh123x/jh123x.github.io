import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import ProjectsMenu from "./Projects";
import portfolios from "../data/portfolios";

describe("Menu", () => {
  test("should render correctly portfolio", () => {
    expect(<ProjectsMenu menuItem={portfolios} />).toMatchSnapshot();
  });
});
