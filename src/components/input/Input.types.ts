import { InputHTMLAttributes, ReactNode } from "react";

/**
 * Props for the Input component.
 */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * An optional icon to display at the start of the input field.
   * The icon will be automatically sized and colored based on the theme.
   */
  startIcon?: ReactNode;

  /**
   * An optional icon to display at the end of the input field.
   * The icon will be automatically sized and colored based on the theme.
   */
  endIcon?: ReactNode;

  /**
   * An optional error message to display below the input field.
   * When provided, the input will automatically switch to error variant.
   */
  errorMessage?: string;

  /**
   * The visual variant of the input.
   * - `default`: Standard input styling
   * - `error`: Error state styling (automatically applied when errorMessage is provided)
   */
  variant?: "default" | "error";
}
