import * as React from "react";
import PortfoliosPage from "./PortfoliosPage";
import { describe, expect, test } from "@jest/globals";

describe("Portfolio Page", () => {
  test("should render correctly", () => {
    const page = <PortfoliosPage />;
    expect(page).toMatchSnapshot();
  });
});
