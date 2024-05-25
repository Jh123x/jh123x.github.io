import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import { MainLayout, InnerLayout } from "./Layouts";

describe("MainLayout", () => {
  test("should render correctly", () => {
    const mainLayout = <MainLayout />;
    expect(mainLayout).toMatchSnapshot();
  });
});

describe("InnerLayout", () => {
  test("should render correctly", () => {
    const innerLayout = <InnerLayout />;
    expect(innerLayout).toMatchSnapshot();
  });
});
