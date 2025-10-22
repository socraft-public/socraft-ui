import { CardProps as PrimeCardProps } from "primereact/card";
import { ReactNode } from "react";

export interface CardProps extends PrimeCardProps {
  /**
   * Buttons to display at the bottom of the card
   */
  buttons?: ReactNode;
  /**
   * The image to display at the top of the card
   */
  image?: string;
}
