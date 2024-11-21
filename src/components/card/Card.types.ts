import { CardProps as PrimeCardProps } from "primereact/card";
import { ReactNode } from "react";

export interface CardProps extends PrimeCardProps {
  /**
   * Buttons to display at the bottom of the card
   */
  buttons?: ReactNode;
  /**
   * Whether to display the card in dark mode
   */
  darkMode?: boolean;
}
