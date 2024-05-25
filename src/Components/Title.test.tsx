import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import Title from "./Title";

describe("Title", () => {
  test("should render correctly", () => {
    expect(<Title title="Test Title" span="Test Span" />).toMatchSnapshot();
  });
});
