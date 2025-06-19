import React, { ReactNode } from "react";
import { CarouselProps } from "./Carousel.types";
import { FC, useEffect, useState } from "react";
import { Crafter } from "../profile/Profile.types";
import "./Carousel.css";
import { Carousel as PrimeCarousel } from "primereact/carousel";
import { Profile } from "../profile";

const defaultResponsiveOptions = [
  {
    breakpoint: "1400px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
];

const Carousel: FC<CarouselProps> = ({
  useCustomElements,
  customElements,
  responsiveOptions = defaultResponsiveOptions,
  fullWidth,
  shouldOpenTheProfile = true,
  shouldOpenTheProfileInANewTab = true,
  width = "70%",
  centered,
  darkMode,
  numVisible = 1,
  autoplayInterval = 3000,
  circular = true,
}) => {
  const [crafters, setCrafters] = useState<Crafter[]>([]);

  const crafterTemplate = (crafter: Crafter) => {
    return (
      <Profile
        crafter={crafter}
        opensTheProfile={shouldOpenTheProfile}
        opensTheProfileInANewTab={shouldOpenTheProfileInANewTab}
      />
    );
  };

  const skeletonTemplate = () => {
    return <div className={`skeleton ${darkMode ? "dark" : ""}`}></div>;
  };

  const customElementsTemplate = (element: ReactNode) => <>{element}</>;

  useEffect(() => {
    const initCrafters = async (): Promise<void> => {
      const result = await fetch(
        `https://my.socraft.ch/api/public/profiles?orderBy=3`,
      );
      const profiles = (await result.json()).profiles;

      setCrafters(profiles);
    };

    if (!useCustomElements) {
      void initCrafters();
    }
  }, [useCustomElements]);

  if (!useCustomElements) {
    if (crafters.length === 0) {
      return (
        <PrimeCarousel
          value={Array.from({ length: 5 })}
          numVisible={5}
          numScroll={1}
          circular={circular}
          autoplayInterval={autoplayInterval}
          itemTemplate={skeletonTemplate}
          className={`socraft-carousel crafters ${fullWidth ? "full-width" : ""} ${centered ? "centered" : ""} ${darkMode ? "darkmode" : ""}`}
          style={{ width, margin: fullWidth ? "0" : "0 auto" }}
          responsiveOptions={responsiveOptions}
        />
      );
    }

    return (
      <PrimeCarousel
        value={crafters}
        numVisible={5}
        numScroll={1}
        circular={circular}
        autoplayInterval={autoplayInterval}
        itemTemplate={crafterTemplate}
        className={`socraft-carousel crafters ${fullWidth ? "full-width" : ""} ${centered ? "centered" : ""} ${darkMode ? "darkmode" : ""}`}
        style={{ width, margin: fullWidth ? "0" : "0 auto" }}
        responsiveOptions={responsiveOptions}
      />
    );
  }

  return (
    <PrimeCarousel
      value={customElements}
      numVisible={numVisible}
      numScroll={1}
      circular={circular}
      autoplayInterval={autoplayInterval}
      showNavigators
      itemTemplate={customElementsTemplate}
      className={`socraft-carousel custom-elements ${fullWidth ? "full-width" : ""} ${centered ? "centered" : ""} ${darkMode ? "darkmode" : ""}`}
      style={{
        width: numVisible === 1 ? "100%" : width,
        margin: fullWidth ? "0" : "0 auto",
      }}
      responsiveOptions={responsiveOptions}
    />
  );
};

export default Carousel;
