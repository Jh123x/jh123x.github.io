import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import Menu from "./Menu";
import portfolios from "../data/portfolios";

describe("Menu", () => {
  test("should render correctly portfolio", () => {
    expect(<Menu menuItem={portfolios} />).toMatchSnapshot();
  });
});
