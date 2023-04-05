import { GitHub, Link, Google, Apple } from "@mui/icons-material";

const iconMap = {
  github: GitHub,
  link: Link,
  google: Google,
  apple: Apple,
};
const itemMap = (links) => {
  if (links === undefined) return <></>;
  const entries = Object.entries(links);
  return (
    <ul>
      {entries.map(([name, link]) => {
        const Icon = iconMap[name] ?? Link;
        return (
          <li>
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
