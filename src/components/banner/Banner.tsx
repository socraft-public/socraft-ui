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
      className="relative flex items-center justify-center   bg-[#fbbb10] px-5 py-4 text-[#333] md:min-h-[40px] md:h-auto md:py-2.5"
    >
      <div className="flex w-full flex-col items-center justify-center gap-1 pr-0 text-center md:mt-0 md:w-auto md:flex-row md:flex-nowrap md:items-center md:justify-center md:gap-6 md:pr-16 md:text-center md:mx-auto">
        <BannerTitle className="text-xl font-bold md:flex-none md:whitespace-nowrap">
          {name}
        </BannerTitle>
        <p className="text-sm md:flex-none md:whitespace-nowrap md:text-center">
          {formattedDate} - {renderedDescription}
        </p>
        <BannerAction
          asChild
          className="border-transparent p-0 text-[#282828] hover:text-[#000] hover:bg-transparent md:flex-none md:whitespace-nowrap"
          variant="outline"
          size="sm"
        >
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center transition-all duration-200 hover:underline"
          >
            {labelButton} <IconExternalLink size={16} />
          </a>
        </BannerAction>
      </div>
      <BannerClose className="absolute right-0 top-0 z-10 text-[#333] md:right-4 md:top-1/2 md:-translate-y-1/2" />
    </ShadcnBanner>
  );
};

export default Banner;
