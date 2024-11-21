import React, { useEffect, useState } from "react";
import { NavBarProps } from "./NavBar.types";
import "./NavBar.css";
import { Button } from "../button";
import logo from "../../assets/logo-dark.svg";

const NavBar: React.FC<NavBarProps> = ({ tabs, buttons, ...props }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="socraft-navbar">
      <img
        src={logo}
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
          {tabs.map((tabs, index) => (
            <div
              key={index}
              className="tab"
              data-slug={`/${tabs.title.toLowerCase()}`}
              onClick={() =>
                (window.location.pathname = `/${tabs.url.toLowerCase()}`)
              }
            >
              {tabs.title}
            </div>
          ))}

          {buttons.map((button, index) => (
            <Button
              key={index}
              variant="yellow"
              onClick={() => window.open(button.url)}
            >
              {button.title}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
