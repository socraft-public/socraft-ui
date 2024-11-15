import { FC } from "react";
import { InputProps } from "./Input.types";
import React from "react";
import "./Input.css";

const Input: FC<InputProps> = ({ startIcon, endIcon, errorMessage, ...props }) => {
  return (
    <div className={errorMessage !== undefined ? "input-group error" : "input-group"}>
      {startIcon}
      <input {...props} />
      {endIcon}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default Input;
