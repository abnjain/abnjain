import Link, { type LinkProps } from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "dark" | "primary" | "icon";
type ButtonSize = "sm" | "lg" | "icon";

const brutalFaceClasses: Record<Exclude<ButtonVariant, "icon">, string> = {
  dark: "brutal-pressable__face border border-black bg-ink text-on-dark",
  primary: "brutal-pressable__face border border-black bg-accent text-on-dark",
};

const iconFaceClasses =
  "border border-border bg-bg text-ink transition-[transform,color,background-color] duration-150 hover:bg-surface hover:text-accent hover:translate-x-0.5 hover:translate-y-0.5 motion-reduce:hover:translate-x-0 motion-reduce:hover:translate-y-0";

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-[25px] py-[13px] text-base font-normal leading-6",
  lg: "w-full py-6 text-2xl font-bold leading-6",
  icon: "size-10",
};

const shadowLayerClasses: Record<Exclude<ButtonVariant, "icon">, string> = {
  dark: "bg-accent",
  primary: "bg-black",
};

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  showArrow?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps & Omit<LinkProps, "href"> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function faceClasses(variant: ButtonVariant, size: ButtonSize) {
  if (variant === "icon") {
    return cn(iconFaceClasses, sizeClasses.icon);
  }

  return cn(brutalFaceClasses[variant], sizeClasses[size]);
}

function ButtonContent({
  children,
  showArrow,
  size,
  variant,
}: Pick<ButtonBaseProps, "children" | "showArrow" | "size" | "variant">) {
  if (variant === "icon") {
    return <>{children}</>;
  }

  return (
    <span
      className={cn(
        "inline-flex items-center whitespace-nowrap font-mono",
        size === "lg" ? "font-bold" : "font-normal",
      )}
    >
      {children}
      {showArrow ? <span aria-hidden> ↗</span> : null}
    </span>
  );
}

function BrutalShell({
  variant,
  className,
  children,
}: {
  variant: Exclude<ButtonVariant, "icon">;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "brutal-pressable relative mb-1 mr-1 inline-flex overflow-visible",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn("brutal-pressable__shadow", shadowLayerClasses[variant])}
      />
      {children}
    </span>
  );
}

export function Button({
  variant = "dark",
  size = "sm",
  showArrow,
  className,
  children,
  ...props
}: ButtonProps) {
  const resolvedSize = variant === "icon" ? "icon" : size;
  const resolvedShowArrow = showArrow ?? variant !== "icon";

  const elementClasses = cn(
    "inline-flex items-center justify-center rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
    faceClasses(variant, resolvedSize),
  );

  const content = (
    <ButtonContent
      showArrow={resolvedShowArrow}
      size={resolvedSize}
      variant={variant}
    >
      {children}
    </ButtonContent>
  );

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;

    if (variant === "icon") {
      return (
        <Link href={href} className={cn(elementClasses, className)} {...linkProps}>
          {content}
        </Link>
      );
    }

    return (
      <BrutalShell variant={variant} className={className}>
        <Link href={href} className={elementClasses} {...linkProps}>
          {content}
        </Link>
      </BrutalShell>
    );
  }

  const { type = "button", ...buttonProps } = props as ButtonAsButton;

  if (variant === "icon") {
    return (
      <button
        type={type}
        className={cn(elementClasses, className)}
        {...buttonProps}
      >
        {content}
      </button>
    );
  }

  return (
    <BrutalShell variant={variant} className={className}>
      <button type={type} className={elementClasses} {...buttonProps}>
        {content}
      </button>
    </BrutalShell>
  );
}
