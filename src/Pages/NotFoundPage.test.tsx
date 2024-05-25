import * as React from "react";
import NotFoundPage from "./NotFoundPage";
import { describe, expect, test } from "@jest/globals";

describe("Render NotFoundPage", () => {
  test("renders NotFoundPage component", () => {
    const notFound = <NotFoundPage />;
    expect(notFound).toMatchSnapshot();
  });
});
