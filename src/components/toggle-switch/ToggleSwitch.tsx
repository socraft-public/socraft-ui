import React, { FC } from "react";
import { ToggleSwitchProps } from "./ToggleSwitch.types";
import "./ToggleSwitch.css";

const ToggleSwitch: FC<ToggleSwitchProps> = ({ ...props }) => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        onChange={(e: any) => props.onToggle?.(e.target.checked)}
        checked={props.checked}
      />
      <span className={props.darkMode ? "slider dark" : "slider"}></span>
    </label>
  );
};

export default ToggleSwitch;
