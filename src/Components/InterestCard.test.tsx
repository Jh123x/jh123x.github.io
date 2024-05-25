import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import InterestCard from "./InterestCard";
import gamedev from "../img/game-dev.svg";

describe("InterestCard", () => {
  test("should render correctly", () => {
    expect(
      <InterestCard
        image={gamedev}
        title="School Blog"
        href="https://nus.jh123x.com"
      />
    ).toMatchSnapshot();
  });
});
