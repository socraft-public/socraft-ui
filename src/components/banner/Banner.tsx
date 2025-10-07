import { IconExternalLink, IconX } from "@tabler/icons-react";
import React, { FC } from "react";
import "./Banner.css";
import { BannerProps } from "./Banner.types";
import { extractTextFromContentfulRichText, formatEventDate } from "./utils";

const Banner: FC<BannerProps> = ({
  name,
  description,
  visibility,
  isVisible,
  date,
  link,
  onClose,
}) => {
  if (!visibility || !isVisible) {
    return null;
  }

  const renderedDescription = extractTextFromContentfulRichText(description);
  const formattedDate = formatEventDate(date);

  return (
    <div className="banner-container">
      <div className="banner-content">
        <h3 className="banner-title">{name}</h3>
        <p className="banner-description">
          {formattedDate}, {renderedDescription}
        </p>
        <a href={link} target="_blank" rel="noreferrer" className="banner-link">
          Inscription <IconExternalLink />
        </a>
        <button className="banner-close-button" onClick={onClose}>
          <IconX />
        </button>
      </div>
    </div>
  );
};

export default Banner;
