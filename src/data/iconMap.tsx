import * as React from "react";
import { Tooltip } from "@mui/material";
import { IconType, type LinkType } from "./types";
import type { IconElement } from "src/Components/icons/types";
import { ReactElement } from "react";
import { LinkedinIcon } from "src/Components/icons/linkedin";
import { GithubIcon } from "src/Components/icons/github";
import { LinkIcon } from "src/Components/icons/link";
import { GoogleIcon } from "src/Components/icons/google";
import { AppleIcon } from "src/Components/icons/apple";
import { DocumentScannerIcon } from "src/Components/icons/scanner";
import { YoutubeIcon } from "src/Components/icons/youtube";

const iconMap: Map<IconType, IconElement> = new Map<IconType, IconElement>([
  [IconType.github, GithubIcon],
  [IconType.google, GoogleIcon],
  [IconType.apple, AppleIcon],
  [IconType.linkedin, LinkedinIcon],
  [IconType.link, LinkIcon],
  [IconType.youtube, YoutubeIcon],
  [IconType.docs, DocumentScannerIcon],
]);

const mapItem = ({ iconType, link, tooltip }: LinkType): ReactElement<
  any,
  any
> => {
  const Icon = iconMap.get(iconType) ?? LinkIcon;
  const url = link ?? "";

  return (
    <Tooltip title={tooltip} key={iconType + link + tooltip}>
      <span>
        <Icon href={url} />
      </span>
    </Tooltip>
  );
};

export default mapItem;
