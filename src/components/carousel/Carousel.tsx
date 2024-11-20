import React from "react";
import { CarouselProps } from "./Carousel.types";
import { FC, useEffect, useState } from "react";
import { Crafter } from "../profile/Profile.types";
import "./Carousel.css";
import { Carousel as PrimeCarousel } from "primereact/carousel";
import { Profile } from "../profile";

const Carousel: FC<CarouselProps> = ({
  useCustomElements,
  customElements,
  fullWidth,
  shouldOpenTheProfile = true,
  shouldOpenTheProfileInANewTab = true,
  width = "70%",
  centered,
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
    return (
      <PrimeCarousel
        value={crafters}
        numVisible={6}
        numScroll={1}
        circular
        autoplayInterval={3000}
        itemTemplate={crafterTemplate}
        className="socraft-carousel crafters"
      />
    );
  }

  return <h1>carousel</h1>;
};

export default Carousel;
