import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { FC, useState } from "react";
import { Button } from "../button";
import { Carousel } from "../carousel";
import { Card } from "../ui/card";
import { TribeProps } from "./Tribe.types";

const Tribe: FC<TribeProps> = ({
  id,
  name,
  description,
  image,
  crafters,
  showMoreText = "En savoir plus",
  opensTheProfileInANewTab = true,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const hasCrafters = crafters && crafters.length > 0;

  const isEnglish =
    typeof window !== "undefined" && window.location.pathname.includes("/en/");
  const expertsTitle = isEnglish ? "The experts" : "Les experts";

  return (
    <Card
      className="overflow-hidden flex flex-col justify-between border bg-background transition-colors"
      data-tribe-id={id || name}
    >
      <div className="relative overflow-hidden w-full">
        <div
          className="w-full bg-cover bg-center relative flex items-end h-[180px] md:h-[200px]"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          {!isExpanded && (
            <div className="relative w-full px-6 pb-5 pt-6 md:px-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-white m-0 drop-shadow-lg leading-tight">
                {name}
              </h2>
            </div>
          )}
        </div>
      </div>
      {isExpanded && (
        <div className="py-3 px-6 md:px-10 overflow-hidden animate-in slide-in-from-top-4 fade-in-0 duration-500 max-w-full">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 pt-3">
            {name}
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-left md:text-justify m-0">
            {description}
          </p>
          {hasCrafters && (
            <>
              <div className="flex items-baseline gap-3 flex-wrap mt-8">
                <h3 className="text-xl md:text-2xl font-medium m-0">
                  {expertsTitle}
                </h3>
              </div>
              <div className="mt-8 md:mt-3 px-10">
                <Carousel
                  useCustomElements={false}
                  crafters={crafters}
                  shouldOpenTheProfile
                  shouldOpenTheProfileInANewTab={opensTheProfileInANewTab}
                  numVisible={3}
                  autoplay
                  loop
                />
              </div>
            </>
          )}
        </div>
      )}
      <div className="flex mt-3 w-full gap-2.5 px-6 md:px-8 mb-4 pt-2 md:pt-3">
        <Button
          variant="outlined"
          endIcon={isExpanded ? <IconChevronUp /> : <IconChevronDown />}
          onClick={toggleExpand}
          className="flex-1"
        >
          {showMoreText}
        </Button>
      </div>
    </Card>
  );
};

export default Tribe;
