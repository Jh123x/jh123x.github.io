import * as React from "react";
import { describe, expect, test } from "@jest/globals";
import ProjectCard from "./ProjectCard";
import Icon from "../img/blog.svg";

describe("ProjectCard", () => {
  test("should render correctly", () => {
    expect(
      <ProjectCard
        Title="Test"
        Description="Test Description"
        ImageSrc={Icon}
        Icons={{}}
        TechStack={["Stack1", "Stack2"]}
      />,
    );
  });
});
