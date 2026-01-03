import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import AboutDescription from "./ImageSection";

describe("ImageSection", () => {
  test("should render correctly", () => {
    expect(<AboutDescription />).toMatchSnapshot();
  });
});
