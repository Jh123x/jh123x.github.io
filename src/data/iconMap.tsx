import {
  GitHub,
  Link,
  Google,
  Apple,
  LinkedIn,
  LinkRounded,
} from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import { LinkTypes, PortfolioLink } from "./types";
import { ReactElement } from "react";
import * as React from "react";

type Icon = OverridableComponent<SvgIconTypeMap<{}, "svg">>;
type IconType = "github" | "link" | "google" | "apple" | "linkedin" | "link2";

const iconMap: Map<IconType, Icon> = new Map<IconType, Icon>([
  ["github", GitHub],
  ["link", Link],
  ["google", Google],
  ["apple", Apple],
  ["linkedin", LinkedIn],
  ["link2", LinkRounded],
]);

const itemMap = (links: LinkTypes) => {
  const entries = Object.entries(links ?? {});
  return <ul>{entries.map(mapItem)}</ul>;
};

const mapItem = ([name, link]: [IconType, PortfolioLink]): ReactElement<
  any,
  any
> => {
  const Icon = iconMap.get(name) ?? Link;
  const tooltip = link.tooltip ?? "";
  const url = link.link ?? "";

  return (
    <li key={name + link.link + tooltip}>
      <Tooltip title={tooltip}>
        <a href={url}>
          <Icon />
        </a>
      </Tooltip>
    </li>
  );
};

export default itemMap;
