import { Crafter } from "../profile/Profile.types";
import { ReactNode } from "react";

/**
 * Props for the Craftwork component.
 */
export interface CraftworkProps {
  /**
   * The name of the craftwork or project.
   */
  name: string;

  /**
   * The domain or category of the craftwork (e.g., technology, arts).
   */
  domain: string;

  /**
   * Optional holder (Crafter) of the craftwork.
   */
  holder?: Crafter;

  /**
   * A brief pitch or description of the craftwork.
   */
  pitch: string | ReactNode;

  /**
   * The website link associated with the craftwork.
   */
  website: string;

  /**
   * Optional partnership level for the craftwork, if applicable.
   */
  partnershipLevel?: string;

  /**
   * Optional stage of development (e.g., prototype, launched).
   */
  stageOfDevelopment?: string;

  /**
   * Optional flag to indicate if dark mode is enabled.
   */
  darkMode?: boolean;
}
