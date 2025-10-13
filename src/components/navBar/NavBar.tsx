import React, { useState } from "react";
import { NavBarProps } from "./NavBar.types";
import "./NavBar.css";
import { Button } from "../button";
import logoDark from "../../assets/logo-dark.svg";
import logoLight from "../../assets/logo-light.svg";
import { ThemeToggle } from "../theme-toggle";
import { LocaleSelector } from "../locale-selector";

const NavBar: React.FC<NavBarProps> = ({
  activeTabUrl,
  tabs,
  buttons,
  transparent,
  ...props
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
    <nav
      className={`socraft-navbar ${props.darkMode ? "dark" : ""} ${transparent ? "transparent" : ""}`}
    >
      <img
        src={props.darkMode ? logoLight : logoDark}
        alt="logo"
        className="logo"
        onClick={() => (window.location.href = window.location.origin)}
      />
      <label className="hamburger">
        <input
          type="checkbox"
          checked={isMenuOpen}
          onChange={() => setIsMenuOpen(!isMenuOpen)}
        />
        <svg viewBox="0 0 32 32">
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path className="line" d="M7 16 27 16"></path>
        </svg>
      </label>
      <div className={`navbar-content ${isMenuOpen ? "open" : ""}`}>
        <div className="navbar-content-tabs">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tab ${activeTabUrl === tab.url ? "active" : ""} ${
                openDropdown === index ? "open" : ""
              }`}
              onMouseEnter={() => tab.children && setOpenDropdown(index)}
              onMouseLeave={() => tab.children && setOpenDropdown(null)}
              onClick={() => {
                if (!tab.children) {
                  window.location.href = tab.url;
                }
              }}
            >
              {tab.title}
              {tab.children && <span className="arrow" />}
              {openDropdown === index && tab.children && (
                <div className="dropdown-menu">
                  {tab.children.map((child, childIndex) => (
                    <div
                      key={childIndex}
                      className="dropdown-item"
                      onClick={() => (window.location.href = child.url)}
                    >
                      {child.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          {buttons.map((button, index) => (
            <Button
              key={index}
              variant={button.appearance}
              darkMode={props.darkMode}
              onClick={() =>
                window.open(
                  button.url,
                  button.opensTheLinkInNewTab ? "_blank" : "_self",
                )
              }
            >
              {button.title}
            </Button>
          ))}
        </div>
        <div className="navbar-actions">
          {props.showDarkModeToggle && (
            <div className="dark-mode-toggle">
              <span className="label">{props.darkModeText}</span>
              <ThemeToggle
                darkMode={props.darkMode}
                onToggle={props.onDarkModeToggle}
                checked={props.darkMode}
              />
            </div>
          )}
          {props.showLocaleSelector && (
            <>
              <LocaleSelector
                darkMode={props.darkMode}
                options={props.locales ?? []}
                value={props.locale ?? ""}
                onChange={props.onLocaleChange ?? (() => void 0)}
              />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
