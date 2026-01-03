import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  test("should render correctly toggled", () => {
    expect(
      <Sidebar navToggle={true} setNavToggle={() => {}} />,
    ).toMatchSnapshot();
  });
  test("should render correctly untoggled", () => {
    expect(
      <Sidebar navToggle={false} setNavToggle={() => {}} />,
    ).toMatchSnapshot();
  });
});
