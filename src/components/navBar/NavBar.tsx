import React, { useEffect } from "react";
import { NavBarProps } from "./NavBar.types";
import "./NavBar.css";
import { Button } from "../button";
import logo from "../../assets/logo-dark.svg";

const NavBar: React.FC<NavBarProps> = ({ tabs, buttons, ...props }) => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.style.top = "0";
          navbar.style.transition = "top 0.5s ease-in-out";
        } else {
          navbar.style.top = "-100%";
          navbar.style.transition = "top 0.3s ease-in-out";
        }
      }
    };

    const handleDOMContentLoaded = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        if (window.scrollY === 0) {
          navbar.style.top = "-100%";
          navbar.style.transition = "top 0.3s ease-in-out";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);

    document.querySelectorAll(".tab").forEach((tab) => {
      if (tab.getAttribute("data-slug") === window.location.pathname) {
        tab.classList.add("active");
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
    };
  }, []);

  return (
    <nav className="socraft-navbar" id="navbar">
      <img
        src={logo}
        alt="logo"
        className="logo"
        onClick={() => (window.location.href = window.location.origin)}
      />
      <div className="navbar-content">
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
