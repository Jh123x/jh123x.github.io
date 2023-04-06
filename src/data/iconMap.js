import {
  GitHub,
  Link,
  Google,
  Apple,
  LinkedIn,
  LinkRounded,
} from "@mui/icons-material";
import { Tooltip } from "@mui/material";

const iconMap = {
  github: GitHub,
  link: Link,
  google: Google,
  apple: Apple,
  linkedin: LinkedIn,
  link2: LinkRounded,
};

const itemMap = (links) => {
  const entries = Object.entries(links ?? {});

  return (
    <ul>
      {entries.map(([name, link]) => {
        let tooltip;
        const Icon = iconMap[name] ?? Link;
        if (typeof link !== "string") {
          tooltip = link.tooltip;
          link = link.link;
        }
        return (
          <li key={name + link + tooltip}>
            <Tooltip title={tooltip}>
              <a href={link}>
                <Icon />
              </a>
            </Tooltip>
          </li>
        );
      })}
    </ul>
  );
};

export default itemMap;
