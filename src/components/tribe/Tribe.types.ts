import { Crafter } from "../profile/Profile.types";

export interface TribeProps {
  /**
   * The name of the tribe
   */
  name: string;
  /**
   * The description of the tribe
   */
  description: string;
  /**
   * The image of the tribe
   */
  image: string;
  /**
   * The crafters to display in the carousel (when expanded)
   */
  crafters?: Crafter[];
  /**
   * Whether the tribe is in dark mode
   */
  darkMode?: boolean;
  /**
   * The show more button's text
   */
  showMoreText?: string;
  /**
   * Determines if clicking the crafter profile opens it in a new tab
   */
  opensTheProfileInANewTab?: boolean;
}
