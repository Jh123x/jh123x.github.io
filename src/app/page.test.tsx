import * as React from "react";
import HomePage from "./page";
import { describe, expect, test } from "@jest/globals";

describe("Render HomePage", () => {
  test("renders HomePage component", () => {
    const homePage = <HomePage />;
    expect(homePage).toMatchSnapshot();
  });
});
