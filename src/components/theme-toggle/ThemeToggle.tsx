import React, { FC } from "react";
import { ThemeToggleProps } from "./ThemeToggle.types";
import "./ThemeToggle.css";
import { IconMoon, IconSun } from "@tabler/icons-react";

const ThemeToggle: FC<ThemeToggleProps> = ({ ...props }) => {
  return (
    <button
      className={`theme-toggle-button ${props.darkMode && "dark"}`}
      onClick={() => props.onToggle?.(props.darkMode ?? false)}
    >
      {props.darkMode ? <IconSun /> : <IconMoon />}
    </button>
  );
};

export default ThemeToggle;
