import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import { StyledLink } from "./Link";

describe("StyledLink", () => {
  test("should render correctly", () => {
    expect(<StyledLink href="jh123x.com" />);
  });
});
