import { IconExternalLink } from "@tabler/icons-react";
import React, { FC } from "react";
import { BannerProps } from "./Banner.types";
import { extractTextFromContentfulRichText, formatEventDate } from "./utils";
import {
  Banner as ShadcnBanner,
  BannerAction,
  BannerClose,
  BannerTitle,
} from "../ui/banner";

const Banner: FC<BannerProps> = ({
  name,
  description,
  labelButton,
  visibility,
  isVisible,
  date,
  link,
  onClose,
}) => {
  const canDisplay = visibility && isVisible;

  if (!canDisplay) {
    return null;
  }

  const renderedDescription = extractTextFromContentfulRichText(description);
  const formattedDate = formatEventDate(date);

  return (
    <ShadcnBanner
      defaultVisible={canDisplay}
      onClose={onClose}
      className="relative flex-col items-center bg-[#fbbb10] px-5 py-4 text-[#333] md:min-h-[40px] md:h-auto md:flex-row md:py-2.5"
      inset
    >
      <div className="flex w-full flex-col justify-center items-center gap-2 text-center md:flex-1 md:flex-row md:items-center md:justify-center md:gap-4 md:pr-12 md:text-left">
        <BannerTitle className="text-xl font-bold md:w-auto md:flex-none md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">
          {name}
        </BannerTitle>
        <p className="text-sm md:flex-1 md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">
          {formattedDate} - {renderedDescription}
        </p>
      </div>
      <div className="flex items-center gap-2 md:gap-3">
        <BannerAction
          asChild
          className="border-transparent p-0 text-[#282828] hover:text-[#000] hover:bg-transparent"
          variant="outline"
          size="sm"
        >
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 transition-all duration-200 hover:underline"
          >
            {labelButton} <IconExternalLink size={16} />
          </a>
        </BannerAction>
        <BannerClose className="text-[#333] hover:bg-black/10" />
      </div>
    </ShadcnBanner>
  );
};

export default Banner;
