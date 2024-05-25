import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import PrimaryButton from "./PrimaryButton";

describe("Primary Button", () => {
  test("should render correctly", () => {
    expect(<PrimaryButton title="Test Title" />).toMatchSnapshot();
  });
});
