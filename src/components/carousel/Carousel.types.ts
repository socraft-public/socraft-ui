import { ReactNode } from "react";
import { Crafter } from "../profile/Profile.types";

/**
 * Props for the Carousel component.
 */
export interface CarouselProps {
  useCustomElements: boolean;
  customElements?: ReactNode[];
  shouldOpenTheProfile?: boolean;
  shouldOpenTheProfileInANewTab?: boolean;
  numVisible: number;
  loop?: boolean;
  crafters?: Crafter[];
  className?: string;
  autoplay?: boolean;
}
