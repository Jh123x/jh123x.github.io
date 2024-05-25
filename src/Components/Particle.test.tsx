import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import Particle from "./Particle";

describe("Particle", () => {
  test("should render correctly", () => {
    expect(<Particle />).toMatchSnapshot();
  });
});
