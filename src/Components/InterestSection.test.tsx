import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import InterestSection from "./InterestsSection";

describe("InterestSection", () => {
  test("should render correctly", () => {
    expect(<InterestSection />).toMatchSnapshot();
  });
});
