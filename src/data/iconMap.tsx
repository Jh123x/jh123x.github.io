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
import { PortfolioLink, IconTypes, Icon } from "./types";
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

const mapItem = ([name, link]: [IconTypes, PortfolioLink]): ReactElement<
  any,
  any
> => {
  const Icon = iconMap.get(name) ?? LinkIcon;
  const tooltip = link.tooltip ?? "";
  const url = link.link ?? "";

  return (
    <Tooltip title={tooltip} key={name + link.link + tooltip}>
      <Link href={url}>
        <Icon sx={{ mt: 0.7 }} />
      </Link>
    </Tooltip>
  );
};

export default mapItem;
