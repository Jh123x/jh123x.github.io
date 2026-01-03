import * as React from "react";
import { Tooltip } from "@mui/material";
import { type PortfolioLink, IconTypes } from "./types";
import type { IconElement } from "src/Components/icons/types";
import { ReactElement } from "react";
import { LinkedinIcon } from "src/Components/icons/linkedin";
import { GithubIcon } from "src/Components/icons/github";
import { LinkIcon } from "src/Components/icons/link";
import { GoogleIcon } from "src/Components/icons/google";
import { AppleIcon } from "src/Components/icons/apple";
import { DocumentScannerIcon } from "src/Components/icons/scanner";
import { YoutubeIcon } from "src/Components/icons/youtube";

const iconMap: Map<IconTypes, IconElement> = new Map<IconTypes, IconElement>([
  [IconTypes.github, GithubIcon],
  [IconTypes.google, GoogleIcon],
  [IconTypes.apple, AppleIcon],
  [IconTypes.linkedin, LinkedinIcon],
  [IconTypes.link, LinkIcon],
  [IconTypes.youtube, YoutubeIcon],
  [IconTypes.docs, DocumentScannerIcon],
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
      <span>
        <Icon href={url} />
      </span>
    </Tooltip>
  );
};

export default mapItem;
