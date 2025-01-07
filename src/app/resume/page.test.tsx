import * as React from "react";
import ResumePage from "./page";
import { describe, expect, test } from "@jest/globals";

describe("ResumePage Page", () => {
  test("should render correctly", () => {
    const page = <ResumePage />;
    expect(page).toMatchSnapshot();
  });
});
