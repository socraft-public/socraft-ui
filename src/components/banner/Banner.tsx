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
      className="relative flex flex-col items-center bg-[#fbbb10] px-5 py-4 text-[#333] md:min-h-[40px] md:h-auto md:flex-row md:py-2.5"
      inset
    >
      <div className="flex w-full flex-col items-center justify-center gap-3 pr-0 text-center md:flex-row md:gap-4 md:pr-16">
        <BannerTitle className="text-xl font-bold md:w-auto md:flex-none md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">
          {name}
        </BannerTitle>
        <p className="text-sm md:flex-1 md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">
          {formattedDate} - {renderedDescription}
        </p>
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
      </div>
      <BannerClose className="absolute right-4 top-4 text-[#333] hover:bg-black/10 md:top-1/2 md:-translate-y-1/2" />
    </ShadcnBanner>
  );
};

export default Banner;
