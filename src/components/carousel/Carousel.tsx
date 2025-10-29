import React, { FC, ReactNode, useEffect, useState } from "react";
import { CarouselProps } from "./Carousel.types";
import { Crafter } from "../profile/Profile.types";
import {
  Carousel as ShadcnCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Profile } from "../profile";
import { cn } from "../../lib/utils";
import { Card } from "../card";

const Skeleton: FC = () => (
  <div
    className={cn(
      "h-[150px] w-[150px] rounded-[29px] border",
      "bg-gray-200 animate-pulse",
    )}
  />
);

const Carousel: FC<CarouselProps> = ({
  useCustomElements,
  customElements,
  responsiveOptions,
  fullWidth,
  shouldOpenTheProfile = true,
  shouldOpenTheProfileInANewTab = true,

  numVisible = 1,
  autoplayInterval = 3000,
  circular = true,
  crafters = [],
  className,
  ...props
}) => {
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api || !autoplayInterval) return;

    const play = () => {
      api.scrollNext();
    };

    const interval = setInterval(play, autoplayInterval);

    return () => clearInterval(interval);
  }, [api, autoplayInterval]);

  const crafterTemplate = (crafter: Crafter) => {
    return (
      <div className="w-full flex justify-center items-center h-full">
        <Profile
          crafter={crafter}
          opensTheProfile={shouldOpenTheProfile}
          opensTheProfileInANewTab={shouldOpenTheProfileInANewTab}
        />
      </div>
    );
  };

  const getDuplicatedCrafters = () => {
    if (crafters.length < 10) {
      const multiplier = Math.ceil(10 / crafters.length);
      return Array.from({ length: multiplier }, () => crafters).flat();
    }
    return crafters;
  };

  const getDuplicatedCustomElements = () => {
    if (!customElements || customElements.length < 10) {
      const elements = customElements || [];
      const multiplier = Math.ceil(10 / elements.length);
      return Array.from({ length: multiplier }, () => elements).flat();
    }
    return customElements;
  };

  const customElementsTemplate = (element: ReactNode) => <>{element}</>;

  const getResponsiveBasisClass = () => {
    if (responsiveOptions) {
      const breakpoints = responsiveOptions.sort(
        (a, b) => parseInt(b.breakpoint) - parseInt(a.breakpoint),
      );

      const classes = ["basis-full"];

      breakpoints.forEach((option) => {
        const width = parseInt(option.breakpoint);
        const basis = option.numVisible;

        if (width >= 1400) {
          classes.push(`xl:basis-1/${basis}`);
        } else if (width >= 1200) {
          classes.push(`lg:basis-1/${basis}`);
        } else if (width >= 768) {
          classes.push(`md:basis-1/${basis}`);
        } else if (width >= 576) {
          classes.push(`sm:basis-1/${basis}`);
        }
      });

      return cn(...classes);
    }

    return cn(
      "basis-full",
      "sm:basis-1/2",
      "md:basis-1/2",
      "lg:basis-1/3",
      "xl:basis-1/5",
    );
  };

  const getCustomBasisClass = () => {
    if (numVisible === 1) return "basis-full";
    if (numVisible === 2) return "basis-1/2";
    if (numVisible === 3) return "basis-1/3";
    if (numVisible === 4) return "basis-1/4";
    if (numVisible === 5) return "basis-1/5";
    return "basis-full";
  };

  const getImageResponsiveClass = () => {
    return cn(
      "basis-full",
      "sm:basis-1/2",
      "md:basis-1/3",
      "lg:basis-1/4",
      "xl:basis-1/5",
    );
  };

  if (!useCustomElements && crafters.length === 0) {
    return (
      <div
        className={cn(
          "relative mx-auto",
          fullWidth
            ? "w-full"
            : "w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[70%]",
          className,
        )}
        style={{
          width: fullWidth ? "100%" : undefined,
        }}
        {...props}
      >
        <ShadcnCarousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
            dragFree: false,
            startIndex: 0,
            containScroll: "trimSnaps",
          }}
          className="w-full"
        >
          <CarouselContent className="flex items-start">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem
                key={index}
                className={cn(getResponsiveBasisClass(), "pl-2 flex-shrink-0")}
              >
                <div className="flex justify-center items-start w-full p-4 min-h-[220px] h-auto">
                  <Skeleton />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className={cn(
              "flex h-10 w-10 bg-white border-2 border-gray-200 shadow-lg hover:bg-gray-50 -left-2 z-10",
              "top-[75px] sm:top-[85px] md:top-[95px] lg:top-[105px] xl:top-[110px]",
            )}
          />
          <CarouselNext
            className={cn(
              "flex h-10 w-10 bg-white border-2 border-gray-200 shadow-lg hover:bg-gray-50 -right-2 z-10",
              "top-[75px] sm:top-[85px] md:top-[95px] lg:top-[105px] xl:top-[110px]",
            )}
          />
        </ShadcnCarousel>
      </div>
    );
  }

  if (!useCustomElements) {
    return (
      <div
        className={cn(
          "relative mx-auto",
          fullWidth
            ? "w-full"
            : "w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[70%]",
          className,
        )}
        style={{
          width: fullWidth ? "100%" : undefined,
        }}
        {...props}
      >
        <ShadcnCarousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
            dragFree: false,
            startIndex: 0,
            containScroll: "trimSnaps",
          }}
          className="w-full"
        >
          <CarouselContent className="flex items-start">
            {getDuplicatedCrafters().map((crafter, index) => (
              <CarouselItem
                key={`${crafter.id || crafter.firstname}-${index}`}
                className={cn(getResponsiveBasisClass(), "pl-2 flex-shrink-0")}
              >
                <div className="flex justify-center items-start w-full p-4 min-h-[220px] h-auto">
                  {crafterTemplate(crafter)}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className={cn(
              "flex h-10 w-10 -left-2 z-10",
              "top-[75px] sm:top-[85px] md:top-[95px] lg:top-[105px] xl:top-[110px]",
            )}
          />
          <CarouselNext
            className={cn(
              "flex h-10 w-10 -right-2 z-10",
              "top-[75px] sm:top-[85px] md:top-[95px] lg:top-[105px] xl:top-[110px]",
            )}
          />
        </ShadcnCarousel>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative mx-auto",
        fullWidth
          ? "w-full"
          : numVisible === 1
            ? "w-full"
            : "w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[70%]",
        className,
      )}
      style={{
        width: numVisible === 1 ? "100%" : fullWidth ? "100%" : undefined,
      }}
      {...props}
    >
      <ShadcnCarousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: circular,
          skipSnaps: false,
          dragFree: false,
          startIndex: 0,
          containScroll: "trimSnaps",
          duration: 40,
          dragThreshold: 20,
        }}
        className="w-full"
      >
        <CarouselContent
          className={cn(
            "flex items-start",
            getDuplicatedCustomElements()?.some(
              (element) =>
                React.isValidElement(element) && element.type === "img",
            )
              ? "px-0"
              : "px-6 sm:px-0 gap-4",
          )}
        >
          {getDuplicatedCustomElements()?.map((element, index) => {
            const isValidElement = React.isValidElement(element);
            const typedElement = isValidElement
              ? (element as React.ReactElement)
              : null;
            const isImageElement = typedElement?.type === "img";
            const isCardElement = typedElement?.type === Card;

            return (
              <CarouselItem
                key={index}
                className={cn(
                  isImageElement
                    ? getImageResponsiveClass()
                    : isCardElement
                      ? "basis-full"
                      : getCustomBasisClass(),
                  "flex-shrink-0",
                  isImageElement ? "pl-2" : "pl-0",
                )}
              >
                <div
                  className={cn(
                    "flex justify-center w-full h-auto",
                    isImageElement
                      ? "items-center p-2 mx-8 sm:mx-2"
                      : isCardElement
                        ? "items-stretch px-3 sm:px-2 mx-4 sm:mx-2 md:mx-4"
                        : "items-center p-1 mx-8 sm:mx-2",
                  )}
                >
                  {isImageElement && typedElement ? (
                    <div className="flex justify-center items-center w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[150px] md:h-[150px] mx-auto">
                      {React.cloneElement(typedElement, {
                        className: cn(
                          typedElement.props.className,
                          "object-contain w-full h-auto filter grayscale",
                        ),
                        style: {
                          ...typedElement.props.style,
                          objectFit: "contain",
                          width: "100%",
                          height: "auto",
                        },
                      })}
                    </div>
                  ) : isCardElement && typedElement ? (
                    <div className="flex h-auto w-full md:w-auto md:min-w-[360px] lg:min-w-[420px] xl:min-w-[520px] md:max-w-full">
                      {React.cloneElement(typedElement, {
                        className: cn(
                          typedElement.props.className,
                          "!w-full md:!w-auto !h-auto !gap-4 !p-4 sm:!p-6 md:!max-w-none",
                        ),
                      })}
                    </div>
                  ) : (
                    <div className="w-full h-full flex justify-center items-center max-w-md mx-auto px-0">
                      {customElementsTemplate(element)}
                    </div>
                  )}
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious
          className={cn(
            "flex h-10 w-10 z-10",
            getDuplicatedCustomElements()?.some(
              (element) =>
                React.isValidElement(element) && element.type === "img",
            )
              ? "left-2 top-[60px] sm:top-[70px] md:top-[75px]"
              : "hidden sm:flex sm:top-1/2 sm:-translate-y-1/2 sm:left-1 md:left-2",
          )}
        />
        <CarouselNext
          className={cn(
            "flex h-10 w-10 z-10",
            getDuplicatedCustomElements()?.some(
              (element) =>
                React.isValidElement(element) && element.type === "img",
            )
              ? "right-2 top-[60px] sm:top-[70px] md:top-[75px]"
              : "hidden sm:flex sm:top-1/2 sm:-translate-y-1/2 sm:right-1 md:right-2",
          )}
        />
      </ShadcnCarousel>
    </div>
  );
};

export default Carousel;
