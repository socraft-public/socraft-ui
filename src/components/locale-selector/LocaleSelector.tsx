import React, { FC } from "react";
import "./LocaleSelector.css";
import { LocaleSelectorProps } from "./LocaleSelector.types";

import "primereact/resources/primereact.min.css";

const LocaleSelector: FC<LocaleSelectorProps> = ({
  options,
  value,
  onChange,
  darkMode,
}) => {
  return (
    <select
      className={`locale-selector ${darkMode && "dark"}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option, key) => (
        <option key={key}>{option}</option>
      ))}
    </select>
  );
};

export default LocaleSelector;
