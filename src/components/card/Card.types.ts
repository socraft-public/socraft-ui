import type { CardProps as PrimeCardProps } from "primereact/card";
import type { ComponentType, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type { cardVariants } from "../ui/card";
import type { Crafter } from "../profile/Profile.types";

type CardVariant = VariantProps<typeof cardVariants>["variant"];

type PrimePropsWithChildren = Omit<PrimeCardProps, "children"> & {
  children?: ReactNode;
};

interface SharedCardProps extends PrimePropsWithChildren {
  className?: string;
}

export interface CardDefaultVariantProps extends SharedCardProps {
  /**
   * Variant of the card component. Defaults to `default`.
   */
  variant?: Exclude<CardVariant, "content">;
  /**
   * Buttons to display at the bottom of the card.
   */
  buttons?: ReactNode;
  /**
   * The image to display at the top of the card.
   */
  image?: string;
}

export interface CardContentVariantProps
  extends Omit<
    SharedCardProps,
    "variant" | "buttons" | "image" | "title" | "subTitle" | "header" | "footer"
  > {
  /**
   * Use the content variant styling and layout.
   */
  variant: "content";
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
  pitch?: string | ReactNode;
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

export type CardProps = CardContentVariantProps | CardDefaultVariantProps;
