import { ReactNode } from "react";

export interface FooterProps {
  /**
   * Locale for built-in i18n ("fr" | "en"). If not provided, it will be auto-detected.
   */
  locale?: "fr" | "en";
  /**
   * The address of the company.
   */
  address: string;
  /**
   * Address mail for contact
   */
  contactAddress: string;
  /**
   * The link to the terms and conditions.
   */
  cguLink?: string;
  /**
   * The text to display for the terms and conditions
   */
  cguText?: string;
  /**
   * The link to the Instagram page.
   */
  instagramLink?: string;
  /**
   * The link to the LinkedIn page.
   */
  linkedinLink?: string;
  /**
   * The link to the GitHub page.
   */
  githubLink?: string;
  /**
   * The link to the Facebook page.
   */
  facebookLink?: string;
  /**
   * The link to the YouTube page.
   */
  youtubeLink?: string;
  /**
   * Badges
   */
  badges?: ReactNode[];
  /**
   * Useful links
   */
  usefulLinks?: { title: string; href: string }[];
  /**
   * Title displayed above useful links section (uses built-in i18n by default; provide to override)
   */
  usefulLinksTitle?: string;
  /**
   * Newsletter loading state propagated to the custom renderer.
   */
  newsletterLoading?: boolean;
  /**
   * Custom renderer for the newsletter form; receives base state to drive custom UI.
   */
  NewsLetterForm?: (params: {
    locale: "fr" | "en";
    isLoading: boolean;
    renderDefaultForm: () => ReactNode;
  }) => ReactNode;
  /**
   * Additional CSS classes
   */
  className?: string;
}
