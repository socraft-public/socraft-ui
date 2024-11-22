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
      {startIcon &&
        React.cloneElement(startIcon as any, {
          color: props.darkMode ? "white" : "black",
        })}
      <input {...props} />
      {endIcon &&
        React.cloneElement(endIcon as any, {
          color: props.darkMode ? "white" : "black",
        })}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default Input;
