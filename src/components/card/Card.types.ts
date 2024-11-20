import { CardProps as PrimeCardProps } from "primereact/card";
import { ReactNode } from "react";

export interface CardProps extends PrimeCardProps {
  buttons?: ReactNode;
}
