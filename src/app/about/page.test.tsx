import * as React from "react";
import AboutPage from "./page";
import { describe, expect, test } from "@jest/globals";

describe("Render AboutPage", () => {
  test("renders AboutPage component", () => {
    const aboutPage = <AboutPage />;
    expect(aboutPage).toMatchSnapshot();
  });
});
