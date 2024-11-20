import { InputHTMLAttributes, ReactNode } from "react";

/**
 * Props for the Input component.
 */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * An optional icon to display at the start of the input field.
   */
  startIcon?: ReactNode;

  /**
   * An optional icon to display at the end of the input field.
   */
  endIcon?: ReactNode;

  /**
   * An optional error message to display below the input field.
   * This can be used to provide validation feedback to the user.
   */
  errorMessage?: string;
}
