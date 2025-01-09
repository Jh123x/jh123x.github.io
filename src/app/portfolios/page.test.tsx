import * as React from "react";
import PortfoliosPage from "./page";
import { describe, expect, test } from "@jest/globals";

describe("Portfolio Page", () => {
  test("should render correctly", () => {
    const page = <PortfoliosPage />;
    expect(page).toMatchSnapshot();
  });
});
