import { HTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  variant: "yellow" | "black" | "outlined";
}
