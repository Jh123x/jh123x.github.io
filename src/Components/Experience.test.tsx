import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import Resume from "./Experience";

describe("Resume", () => {
  test("should render correctly", () => {
    expect(<Resume />).toMatchSnapshot();
  });
});
