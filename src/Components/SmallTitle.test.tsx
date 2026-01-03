import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import SmallTitle from "./SmallTitle";

describe("Small Title", () => {
  test("should render correctly", () => {
    expect(<SmallTitle icon={<></>} title="Test Title" />).toMatchSnapshot();
  });
});
