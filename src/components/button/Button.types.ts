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
   * - `default`: Default shadcn variant
   * - `destructive`: Destructive shadcn variant
   * - `outline`: Outline shadcn variant
   * - `secondary`: Secondary shadcn variant
   * - `ghost`: Ghost shadcn variant
   * - `link`: Link shadcn variant
   * - `yellow`: Socraft yellow-colored button
   * - `socraft-link`: Socraft button with link style
   * - `outlined`: Socraft button with outlined style
   * - `socraft-icon`: Socraft button for icon-only usage
   */
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "yellow"
    | "socraft-link"
    | "outlined"
    | "socraft-icon";

  /**
   * The size of the button.
   * - `default`: Default size
   * - `sm`: Small size
   * - `lg`: Large size
   * - `icon`: Icon-only button size
   */
  size?: "default" | "sm" | "lg" | "icon";
  /**
   * Change the default rendered element for the one passed as a child,
   * merging their props and behavior.
   */
  asChild?: boolean;

  /**
   * Whether the button is in a loading state.
   * When true, shows a loading spinner and disables the button.
   */
  loading?: boolean;
}
