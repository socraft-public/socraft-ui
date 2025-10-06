import React, { FC } from "react";
import { BannerProps } from "./Banner.types";
import "./Banner.css";

const Banner: FC<BannerProps> = ({
  name,
  description,
  visibility,
  date,
  link,
}) => {
  if (!visibility) {
    return null;
  }

  return (
    <div
      className="banner-container"
      onClick={() => {
        if (link) {
          window.open(link, "_blank", "noopener,noreferrer");
        }
      }}
      style={{ cursor: link ? "pointer" : "default" }}
    >
      <div className="banner-content">
        <h3 className="banner-title">{name}</h3>
        <p className="banner-description">{description}</p>
        <p className="banner-date">{date}</p>
      </div>
    </div>
  );
};

export default Banner;
