import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import Skills from "./Skills";

describe("Skills", () => {
  test("should render correctly", () => {
    expect(<Skills />).toMatchSnapshot();
  });
});
