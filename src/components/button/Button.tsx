import React, { FC } from "react";
import { ButtonProps } from "./Button.types";
import "./Button.css";

const Button: FC<ButtonProps> = ({ text }) => {
  return <button>{text}</button>;
};

export default Button;
