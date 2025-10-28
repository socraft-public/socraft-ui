import { ReactNode } from "react";

export interface FooterProps {
  /**
   * Locale for built-in i18n ("fr" | "en"). If not provided, it will be auto-detected.
   */
  locale?: "fr" | "en";
  /**
   * The list of cities where the company is located.
   */
  cities: string[];
  /**
   * The address of the company.
   */
  address: string;
  /**
   * Address mail for contact
   */
  contactAddress: string;
  /**
   * The copyright text.
   */
  copyright: string;
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
   * Newsletter descirpiton
   */
  newsletterDescription?: string;
  /**
   * Newsletter submit handler
   */
  onNewsletterSubmit?: (email: string) => void | Promise<void>;
  /**
   * Newsletter loading state
   */
  onNewsletterSubmitAsync?: (email: string) => void | Promise<void>;
  /**
   * Newsletter loading state
   */
  newsletterLoading?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
}
