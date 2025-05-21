import * as React from "react";
import {
  GitHub,
  Link as LinkIcon,
  Google,
  Apple,
  LinkedIn,
  DocumentScannerOutlined,
  YouTube,
} from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { LinkTypes, PortfolioLink, IconTypes, Icon } from "./types";
import { ReactElement } from "react";
import Link from "next/link";

const iconMap: Map<IconTypes, Icon> = new Map<IconTypes, Icon>([
  [IconTypes.github, GitHub],
  [IconTypes.google, Google],
  [IconTypes.apple, Apple],
  [IconTypes.linkedin, LinkedIn],
  [IconTypes.link, LinkIcon],
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
  const Icon = iconMap.get(name) ?? LinkIcon;
  const tooltip = link.tooltip ?? "";
  const url = link.link ?? "";

  return (
    <li key={name + link.link + tooltip}>
      <Tooltip title={tooltip}>
        <Link href={url}>
          <Icon />
        </Link>
      </Tooltip>
    </li>
  );
};

export default itemMap;
