import React, { cloneElement, FC, isValidElement, useState } from "react";
import { CarouselProps } from "./Carousel.types";
import { Profile } from "../profile";
import {
  CarouselApi,
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
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [isHovered, setIsHovered] = useState(false);

  React.useEffect(() => {
    if (
      !autoplay ||
      !carouselApi ||
      carouselApi.slideNodes().length <= 1 ||
      isHovered
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      if (carouselApi.canScrollNext()) {
        carouselApi.scrollNext();
      } else if (!loop) {
        carouselApi.scrollTo(0);
      }
    }, 5000);

    return () => window.clearInterval(timer);
  }, [autoplay, carouselApi, loop, isHovered]);

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
      className={cn("w-full max-w-full px-12", className)}
      opts={{ loop, align: "start" }}
      setApi={setCarouselApi}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
            {isValidElement(element) && element.type === "img"
              ? cloneElement(element, {
                  className: cn("mx-auto block", element.props.className),
                } as any)
              : element}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </ShadcnCarousel>
  );
};

export default Carousel;
