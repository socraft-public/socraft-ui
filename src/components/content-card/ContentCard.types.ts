import { type ComponentType, type ReactNode } from "react";

import { Crafter } from "../profile/Profile.types";

/**
 * Props for the Craftwork component.
 */
export interface ContentCardProps {
  /**
   * The name of the craftwork or project.
   */
  name: string;

  /**
   * The domain or category of the craftwork (e.g., technology, arts).
   */
  domain: string;

  /**
   * Optional list of holders to display. Provide one or multiple crafters.
   */
  holders?: Crafter[];

  /**
   * A brief pitch or description of the craftwork.
   */
  pitch: string | ReactNode;

  /**
   * The website link associated with the craftwork.
   */
  website: string;

  /**
   * Optional icon component rendered at the end of the CTA button.
   * Defaults to an arrow icon.
   */
  actionIcon?: ComponentType<{ className?: string }>;
}
