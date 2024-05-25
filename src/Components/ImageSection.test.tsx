import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import ImageSection from "./ImageSection";

describe("ImageSection", () => {
  test("should render correctly", () => {
    expect(<ImageSection />).toMatchSnapshot();
  });
});
