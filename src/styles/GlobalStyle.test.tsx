import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import GlobalStyle from "./GlobalStyle";

describe("GlobalStyle", () => {
  test("should render correctly", () => {
    const globalStyle = <GlobalStyle />;
    expect(globalStyle).toMatchSnapshot();
  });
});
