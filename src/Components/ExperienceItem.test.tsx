import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import ExperienceItem from "./ExperienceItem";
import workExperience from "../data/workExperience";

describe("Resume Item", () => {
  for (const experience of workExperience) {
    test(`should render a ${experience.title} item`, () => {
      const wrapper = <div>{<ExperienceItem {...experience} />}</div>;
      expect(wrapper).toMatchSnapshot();
    });
  }
});
