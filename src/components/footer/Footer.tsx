import React, { FC } from "react";
import { FooterProps } from "./Footer.types";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandYoutube,
  IconPhone,
  IconFilePencil,
} from "@tabler/icons-react";
import "./Footer.css";
import Button from "../button/Button";

const Footer: FC<FooterProps> = ({
  cities,
  address,
  copyright,
  cguLink,
  cguText,
  instagramLink,
  linkedinLink,
  facebookLink,
  youtubeLink,
  ...props
}) => {
  return (
    <footer className="footer" {...props}>
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
            <p style={{ textDecoration: "underline" }}>
              <a href={cguLink} style={{ color: "var(--primary-color)" }}>
                {cguText}
              </a>
            </p>
          </div>
        </div>
        <div className="footer-content">
          <h2>Un contact ?</h2>
          <Button
            variant="yellow"
            style={{ marginTop: "30px" }}
            endIcon={<IconPhone />}
          >
            Prendre rdv
          </Button>
          <Button
            variant="yellow"
            style={{ marginTop: "30px" }}
            endIcon={<IconFilePencil />}
          >
            Nous écrire
          </Button>
        </div>
        <div className="footer-content">
          <h2>Follow us</h2>
          <div className="contact-icons">
            <a href={instagramLink}>
              <IconBrandInstagram />
            </a>
            <a href={linkedinLink}>
              <IconBrandLinkedin />
            </a>
            <a href={facebookLink}>
              <IconBrandFacebook />
            </a>
            <a href={youtubeLink}>
              <IconBrandYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
