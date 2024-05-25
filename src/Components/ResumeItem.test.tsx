import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import ResumeItem from "./ResumeItem";
import workExperience from "../data/workExperience";

describe("Resume Item", () => {
  for (const experience of workExperience) {
    test(`should render a ${experience.title} item`, () => {
      const wrapper = <div>{<ResumeItem {...experience} />}</div>;
      expect(wrapper).toMatchSnapshot();
    });
  }
});
