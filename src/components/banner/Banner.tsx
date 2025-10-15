import { IconExternalLink, IconX } from "@tabler/icons-react";
import React, { FC } from "react";
import { BannerProps } from "./Banner.types";
import { extractTextFromContentfulRichText, formatEventDate } from "./utils";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";

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
  if (!visibility || !isVisible) {
    return null;
  }

  const renderedDescription = extractTextFromContentfulRichText(description);
  const formattedDate = formatEventDate(date);

  return (
    <div className="flex flex-col justify-center items-center bg-[#fbbb10] text-[#333] px-5 py-4 w-full relative md:flex-row md:py-2.5 md:min-h-[40px] md:h-auto">
      <div className="flex flex-col gap-2 text-center w-full md:flex-row md:items-center md:gap-4 md:justify-center md:pr-12">
        <h3 className="text-xl font-bold whitespace-normal text-center md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">
          {name}
        </h3>
        <div className="text-sm whitespace-normal text-center md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">
          {formattedDate} - {renderedDescription} -{" "}
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-[#282828] hover:underline transition-all duration-200 whitespace-nowrap"
          >
            {labelButton} <IconExternalLink size={16} />
          </a>
        </div>
      </div>
      <div className="absolute top-2 right-0 pr-2 md:top-1/2 md:-translate-y-1/2">
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className={cn(
            "bg-transparent border-none cursor-pointer text-[#333] p-1 h-auto",
            "hover:bg-black/10 hover:text-[#333]",
          )}
        >
          <IconX size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Banner;
