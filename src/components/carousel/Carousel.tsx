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
  autoplay = true,
  shouldOpenTheProfile = true,
  shouldOpenTheProfileInANewTab = true,
  numVisible = 3,
  loop = true,
  crafters = [],
  className,
}) => {
  const [embla, setEmbla] = React.useState<any>(null);

  React.useEffect(() => {
    if (!autoplay || !embla || embla.slideNodes().length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      if (embla.canScrollNext()) {
        embla.scrollNext();
      } else if (!loop) {
        embla.scrollTo(0);
      }
    }, 4000);

    return () => window.clearInterval(timer);
  }, [autoplay, embla, loop]);

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
      setApi={setEmbla}
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
