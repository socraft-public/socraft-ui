import React, { FC } from "react";
import { BannerProps } from "./Banner.types";
import { extractTextFromContentfulRichText, formatEventDate } from "./utils";
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

  const renderedDescription = extractTextFromContentfulRichText(description);
  const formattedDate = formatEventDate(date);

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
        <p className="banner-description">{renderedDescription}</p>
        <p className="banner-date">{formattedDate}</p>
      </div>
    </div>
  );
};

export default Banner;
