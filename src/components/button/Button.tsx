import React, { FC } from "react";
import { ButtonProps } from "./Button.types";
import "./Button.css";

const Button: FC<ButtonProps> = ({
  children,
  startIcon,
  endIcon,
  variant,
  ...props
}) => {
  return (
    <button className={variant} {...props}>
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
};

export default Button;
