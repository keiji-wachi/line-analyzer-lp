import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  type = "button",
  disabled = false,
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center rounded-button px-6 py-3 font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

  const variantStyle = {
    primary:
      "bg-primary text-background shadow-glow hover:brightness-110 focus-visible:outline-primary",
    secondary:
      "border border-border bg-surface text-text-primary hover:border-primary hover:text-primary focus-visible:outline-primary",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyle} ${variantStyle[variant]} ${className}`}
    >
      {children}
    </button>
  );
}