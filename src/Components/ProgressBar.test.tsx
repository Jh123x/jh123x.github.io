import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import ProgressBar from "./ProgressBar";

describe("ProgressBar", () => {
  test("should render correctly", () => {
    expect(
      <ProgressBar title={"test"} width={10} text={"test_text"} />
    ).toMatchSnapshot();
  });
});
