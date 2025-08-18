import { ReactNode } from "react";
import { CarouselProps as PrimeCarouselProps } from "primereact/carousel";
import { Crafter } from "../profile/Profile.types";

/**
 * Props for the Carousel component.
 */
export interface CarouselProps extends PrimeCarouselProps {
  /**
   * Indicates whether custom elements should be used in the carousel.
   */
  useCustomElements: boolean;

  /**
   * An optional array of custom elements to display in the carousel.
   */
  customElements?: ReactNode[];

  /**
   * Determines if the carousel should take the full width of its container.
   */
  fullWidth?: boolean;

  /**
   * Determines if the profile should open when clicked.
   */
  shouldOpenTheProfile?: boolean;

  /**
   * Determines if crafters in the carousel should be open in a new tab.
   */
  shouldOpenTheProfileInANewTab?: boolean;

  /**
   * Optional custom width for the carousel.
   * Example: "100px", "50%", etc.
   */
  width?: string;

  /**
   * Centers the carousel within its container.
   */
  centered?: boolean;
  /**
   * Determines if the carousel should be in dark mode.
   */
  darkMode?: boolean;
  /**
   * List of crafters.
   */
  crafters?: Crafter[];
}
