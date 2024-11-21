import { HTMLAttributes, ReactNode } from "react";

/**
 * Props for the Button component.
 */
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * The content to be rendered inside the button.
   */
  children: ReactNode;

  /**
   * An optional icon to display at the start of the button.
   */
  startIcon?: ReactNode;

  /**
   * An optional icon to display at the end of the button.
   */
  endIcon?: ReactNode;

  /**
   * The visual variant of the button.
   * - `yellow`: A yellow-colored button.
   * - `black`: A black-colored button.
   * - `outlined`: A button with an outlined style.
   */
  variant: "yellow" | "black" | "outlined";
  /**
   * Whether the button should be rendered in dark mode.
   */
  darkMode?: boolean;
}
