import React, { FC } from "react";
import { ReferenceProps } from "./Reference.types";
import "./Reference.css";

const Reference: FC<ReferenceProps> = ({ darkMode, ...props }) => {
  return (
    <div
      className={`reference ${darkMode ? "dark" : ""}`}
      onClick={props.onClick}
    >
      <div className="reference-head">
        <img src={props.logo} className="logo" alt="Logo" />
      </div>
      <div className="reference-body">
        <h2>{props.title}</h2>
        <span className="category">{props.category.join(", ")}</span>
      </div>
    </div>
  );
};

export default Reference;
