import * as React from "react";
import Link from "next/link";

interface LinkProps {
  href: string;
  target?: string;
  children?: React.ReactNode | React.ReactNode[];
  prefetch?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const StyledLink = ({
  href,
  target,
  children,
  prefetch,
  onClick,
}: LinkProps) => {
  const [isActive, setIsActive] = React.useState<boolean>(false);
  return (
    <Link
      href={href}
      target={target}
      style={{ textDecoration: "none" }}
      prefetch={prefetch ?? (isActive ? null : false)}
      onMouseOver={() => setIsActive(true)}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
