import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  href?: string;
  external?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  type = "button",
  disabled = false,
  onClick,
  className = "",
  href,
  external = false,
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center rounded-button px-6 py-3 font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

  const variantStyle = {
    primary:
      "bg-primary text-background shadow-glow hover:brightness-110 focus-visible:outline-primary",
    secondary:
      "border border-border bg-surface text-text-primary hover:border-primary hover:text-primary focus-visible:outline-primary",
  };

  const styles = `${baseStyle} ${variantStyle[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={styles}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${styles} disabled:cursor-not-allowed disabled:opacity-50`}
    >
      {children}
    </button>
  );
}