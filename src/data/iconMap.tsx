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
import { PortfolioLink } from "./types";
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

const itemMap = (links: PortfolioLink | string) => {
  const entries = Object.entries(links ?? {});
  return <ul>{entries.map(mapItem)}</ul>;
};

const mapItem = ([name, link]: [IconType, Icon]): ReactElement<any, any> => {
  let tooltip: string, finalLink: string;

  const Icon = iconMap.get(name) ?? Link;
  if (typeof link === "object" && link) {
    const val = link as PortfolioLink;
    tooltip = val.tooltip;
    finalLink = val.link;
  }

  return (
    <li key={name + finalLink + tooltip}>
      <Tooltip title={tooltip}>
        <a href={finalLink}>
          <Icon />
        </a>
      </Tooltip>
    </li>
  );
};

export default itemMap;
