import * as React from "react";
import {
  GitHub,
  Link,
  Google,
  Apple,
  LinkedIn,
  DocumentScannerOutlined,
  YouTube,
} from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { LinkTypes, PortfolioLink, IconTypes, Icon } from "./types";
import { ReactElement } from "react";

const iconMap: Map<IconTypes, Icon> = new Map<IconTypes, Icon>([
  [IconTypes.github, GitHub],
  [IconTypes.google, Google],
  [IconTypes.apple, Apple],
  [IconTypes.linkedin, LinkedIn],
  [IconTypes.link, Link],
  [IconTypes.youtube, YouTube],
  [IconTypes.docs, DocumentScannerOutlined],
]);

const itemMap = (links: LinkTypes) => {
  const entries = Object.entries(links ?? {});
  return <ul>{entries.map(mapItem)}</ul>;
};

const mapItem = ([name, link]: [IconTypes, PortfolioLink]): ReactElement<
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
