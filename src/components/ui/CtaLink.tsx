import type { AnchorHTMLAttributes, ReactNode } from "react";

type CtaLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
};

export function CtaLink({
  children,
  className = "",
  variant = "primary",
  ...props
}: CtaLinkProps) {
  const classes = ["button", `button--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={classes} {...props}>
      <span>{children}</span>
      <span className="button__arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}
