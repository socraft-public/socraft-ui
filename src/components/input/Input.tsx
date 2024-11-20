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
      className={
        errorMessage !== undefined
          ? "socraft-input-group error"
          : "socraft-input-group"
      }
    >
      {startIcon}
      <input {...props} />
      {endIcon}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default Input;
