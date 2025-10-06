import React, { FC, useEffect } from "react";
import { LocaleSelectorProps } from "./LocaleSelector.types";
import "./LocaleSelector.css";

import "primereact/resources/primereact.min.css";
import { Dropdown } from "primereact/dropdown";

const LocaleSelector: FC<LocaleSelectorProps> = ({
  options,
  value,
  onChange,
  darkMode,
}) => {
  useEffect(() => {
    const id = "prime-theme";
    let link = document.getElementById(id) as HTMLLinkElement | null;

    if (!link) {
      link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    link.href = darkMode
      ? "https://unpkg.com/primereact/resources/themes/lara-dark-blue/theme.css"
      : "https://unpkg.com/primereact/resources/themes/lara-light-blue/theme.css";
  }, [darkMode]);

  return (
    <Dropdown
      options={options}
      value={value}
      onChange={(e) => onChange(e.value)}
    />
  );
};

export default LocaleSelector;
