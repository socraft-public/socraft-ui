import React, { FC } from "react";
import { LocaleSelectorProps } from "./LocaleSelector.types";
import "./LocaleSelector.css";
import { SelectButton } from "primereact/selectbutton";

const LocaleSelector: FC<LocaleSelectorProps> = ({ ...props }) => {
  const { options, value, onChange } = props;

  return (
    <SelectButton
      className={props.darkMode ? "dark" : ""}
      value={value}
      onChange={(e) => onChange(e.value)}
      options={options}
    />
  );
};

export default LocaleSelector;
