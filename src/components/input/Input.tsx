import { FC } from "react";
import { InputProps } from "./Input.types";
import React from "react";
import "./Input.css";

const Input: FC<InputProps> = ({
  startIcon,
  endIcon,
  errorMessage,
  ...props
}) => {
  return (
    <div
      className={`socraft-input-group ${errorMessage ? "error" : ""} ${props.darkMode ? "dark" : ""}`}
    >
      {startIcon}
      <input {...props} />
      {endIcon}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default Input;
