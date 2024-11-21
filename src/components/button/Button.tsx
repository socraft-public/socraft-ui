import React, { FC } from "react";
import { ButtonProps } from "./Button.types";
import "./Button.css";

const Button: FC<ButtonProps> = ({
  children,
  startIcon,
  endIcon,
  variant,
  darkMode,
  ...props
}) => {
  return (
    <button
      className={`socraft-button ${variant} ${darkMode ? "dark" : ""}`}
      {...props}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
};

export default Button;
