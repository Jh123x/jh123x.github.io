import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import About from "./About";

describe("About", () => {
  test("should render correctly", () => {
    expect(<About />).toMatchSnapshot();
  });
});
