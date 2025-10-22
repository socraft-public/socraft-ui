import React, { FC, useState } from "react";
import { TribeProps } from "./Tribe.types";
import { Button } from "../button";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { Carousel } from "../carousel";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { cn } from "../../lib/utils";

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
      className={cn(
        "w-full max-w-[800px] overflow-hidden flex flex-col justify-between",
        "border border-border bg-background transition-colors",
      )}
      data-tribe-id={id || name}
    >
      <div className="relative overflow-hidden">
        <div
          className="w-full bg-cover bg-center relative flex items-end h-[180px] md:h-[200px]"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          {!isExpanded && (
            <div className="relative w-full px-6 pb-5 pt-6 md:px-10 md:pt-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-white m-0 drop-shadow-lg leading-tight">
                {name}
              </h2>
            </div>
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="px-6 md:px-10 pt-6 md:pt-8 pb-6 md:pb-8 overflow-hidden animate-in slide-in-from-top-4 fade-in-0 duration-500 w-full">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-5 m-0">
            {name}
          </h2>

          <div className="mb-4 md:mb-5">
            <p className="text-base md:text-lg leading-relaxed text-left md:text-justify m-0">
              {description}
            </p>
          </div>

          {hasCrafters && (
            <>
              <div className="flex items-baseline gap-3 mb-3 flex-wrap">
                <h3 className="text-xl md:text-2xl font-medium m-0">
                  {expertsTitle}
                </h3>
                <Badge
                  variant="secondary"
                  className={cn("text-xs px-2 py-1 hover:bg-secondary")}
                >
                  {crafters?.length || 0}
                </Badge>
              </div>
              <div className="mt-0 md:mt-3 w-full max-w-full">
                <Carousel
                  useCustomElements={false}
                  crafters={crafters}
                  shouldOpenTheProfile={true}
                  shouldOpenTheProfileInANewTab={opensTheProfileInANewTab}
                  numVisible={2}
                  circular={true}
                  autoplayInterval={3000}
                  width="100%"
                  fullWidth={true}
                  responsiveOptions={[
                    {
                      breakpoint: "5000px",
                      numVisible: 3,
                      numScroll: 1,
                    },
                    {
                      breakpoint: "800px",
                      numVisible: 2,
                      numScroll: 1,
                    },
                    {
                      breakpoint: "600px",
                      numVisible: 2,
                      numScroll: 1,
                    },
                    {
                      breakpoint: "400px",
                      numVisible: 1,
                      numScroll: 1,
                    },
                  ]}
                />
              </div>
            </>
          )}
        </div>
      )}

      <div className="flex gap-2.5 px-6 md:px-8 mb-4 pt-2 md:pt-3">
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
