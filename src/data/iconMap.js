import { GitHub, Link, Google, Apple, LinkedIn } from "@mui/icons-material";

const iconMap = {
  github: GitHub,
  link: Link,
  google: Google,
  apple: Apple,
  linkedin: LinkedIn,
};

const itemMap = (links) => {
  const entries = Object.entries(links ?? {});
  return (
    <ul>
      {entries.map(([name, link]) => {
        const Icon = iconMap[name] ?? Link;
        return (
          <li key={name + link}>
            <a href={link}>
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default itemMap;
