import * as React from "react";
import App from "./App";
import { describe, expect, test } from "@jest/globals";

describe("Render App", () => {
  test("renders App component", () => {
    const app = <App />;
    expect(app).toMatchSnapshot();
  });
});
