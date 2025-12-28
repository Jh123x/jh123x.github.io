import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import Experiences from "./Experience";

describe("Resume", () => {
  test("should render correctly", () => {
    expect(<Experiences />).toMatchSnapshot();
  });
});
