import React, { FC } from "react";
import { FooterProps } from "./Footer.types";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandYoutube,
  IconBrandGithub,
} from "@tabler/icons-react";
import "./Footer.css";
import { ToggleSwitch } from "../toggle-switch";

const Footer: FC<FooterProps> = ({
  cities,
  address,
  copyright,
  cguLink,
  cguText,
  instagramLink,
  linkedinLink,
  githubLink,
  facebookLink,
  youtubeLink,
  darkMode,
  centerButtons,
  ...props
}) => {
  return (
    <footer className={darkMode ? "footer dark" : "footer"} {...props}>
      <div className="footer-container">
        <div className="footer-content">
          <h2>{cities.join(" - ")}</h2>
          <div className="address">
            <p>
              {address.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <p>{copyright}</p>
            {cguLink && cguText && (
              <p style={{ textDecoration: "underline" }}>
                <a href={cguLink} style={{ color: "var(--primary-color)" }}>
                  {cguText}
                </a>
              </p>
            )}
          </div>
        </div>
        {centerButtons !== undefined && (
          <div className="footer-content">
            <h2>{props.centerButtonsText}</h2>
            <div className="center-buttons">
              {centerButtons.map((button, key) => (
                <span key={key}>
                  <br />
                  {button}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="footer-content">
          <h2>{props.socialNetworksText}</h2>
          <div className="contact-icons">
            <a href={instagramLink}>
              <IconBrandInstagram />
            </a>
            <a href={linkedinLink}>
              <IconBrandLinkedin />
            </a>
            <a href={githubLink}>
              <IconBrandGithub />
            </a>
            <a href={facebookLink}>
              <IconBrandFacebook />
            </a>
            <a href={youtubeLink}>
              <IconBrandYoutube />
            </a>
          </div>
          {props.showDarkModeToggle && (
            <div className="dark-mode-toggle">
              <span className="label">{props.darkModeText}</span>
              <ToggleSwitch
                darkMode={darkMode}
                onToggle={props.onDarkModeToggle}
                checked={darkMode}
              />
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
