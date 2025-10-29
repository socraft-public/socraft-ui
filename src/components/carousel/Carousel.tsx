import React, { FC } from "react";
import { CarouselProps } from "./Carousel.types";
import { Profile } from "../profile";
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Carousel as ShadcnCarousel,
} from "../ui/carousel";
import { cn } from "../../lib/utils";

const Carousel: FC<CarouselProps> = ({
  useCustomElements,
  customElements,
  shouldOpenTheProfile = true,
  shouldOpenTheProfileInANewTab = true,
  numVisible = 3,
  loop = true,
  crafters = [],
  className,
}) => {
  const elements = useCustomElements
    ? customElements
    : crafters.map((crafter, key) => (
        <Profile
          opensTheProfile={shouldOpenTheProfile}
          opensTheProfileInANewTab={shouldOpenTheProfileInANewTab}
          crafter={crafter}
          key={key}
        />
      ));

  return (
    <ShadcnCarousel
      className={cn("w-full", className)}
      opts={{ loop, align: "start" }}
    >
      <CarouselPrevious />
      <CarouselContent>
        {elements?.map((element, key) => (
          <CarouselItem
            className={`md:basis-1/${numVisible} ${
              numVisible === 1
                ? "sm:basis-full"
                : numVisible === 2
                  ? "sm:basis-1/2"
                  : numVisible === 3
                    ? "sm:basis-1/3"
                    : "sm:basis-1/4"
            }`}
            key={key}
          >
            {React.isValidElement(element) && element.type === "img"
              ? React.cloneElement(element, {
                  className: cn(
                    element.props.className,
                    "brightness-0 dark:invert",
                  ),
                } as any)
              : element}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
    </ShadcnCarousel>
  );
};

export default Carousel;
