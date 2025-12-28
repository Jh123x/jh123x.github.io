import * as React from "react";
import ExperiencePage from "./page";
import { describe, expect, test } from "@jest/globals";

describe("ResumePage Page", () => {
  test("should render correctly", () => {
    const page = <ExperiencePage />;
    expect(page).toMatchSnapshot();
  });
});
