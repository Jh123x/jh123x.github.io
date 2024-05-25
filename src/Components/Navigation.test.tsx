import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import Navigation from "./Navigation";

describe("Navigation", () => {
  test("should render correctly", () => {
    expect(<Navigation />).toMatchSnapshot();
  });
});
