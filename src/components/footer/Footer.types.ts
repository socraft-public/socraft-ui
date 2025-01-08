import { ReactNode } from "react";

export interface FooterProps {
  /**
   * The list of cities where the company is located.
   */
  cities: string[];
  /**
   * The address of the company.
   */
  address: string;
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
  instagramLink: string;
  /**
   * The link to the LinkedIn page.
   */
  linkedinLink: string;
  /**
   * The link to the GitHub page.
   */
  githubLink: string;
  /**
   * The link to the Facebook page.
   */
  facebookLink: string;
  /**
   * The link to the YouTube page.
   */
  youtubeLink: string;
  /**
   * An optional dark mode for the footer.
   */
  darkMode?: boolean;
  /**
   * Center buttons
   */
  centerButtons?: ReactNode[];
}
