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
   * The text above social links
   */
  socialNetworksText?: string;
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
   * The text above the center buttons
   */
  centerButtonsText?: string;
  /**
   * Center buttons
   */
  centerButtons?: ReactNode[];
  /**
   * Badges
   */
  badges?: ReactNode[];
  /**
   * More actions
   */
  moreActions?: ReactNode;
  /**
   * Newsletter section title
   */
  newsletterText?: string;
  /**
   * Newsletter input placeholder text
   */
  newsletterPlaceholder?: string;
  /**
   * Newsletter submit button text
   */
  newsletterButtonText?: string;
  /**
   * Newsletter submit handler
   */
  onNewsletterSubmit?: (email: string) => void | Promise<void>;
  /**
   * Newsletter loading state
   */
  newsletterLoading?: boolean;
  /**
   * Newsletter submit handler with loading control
   */
  onNewsletterSubmitAsync?: (email: string) => Promise<void>;
  /**
   * Success message to display after newsletter submission
   */
  newsletterSuccessMessage?: string;
  /**
   * Error message to display when newsletter submission fails
   */
  newsletterErrorMessage?: string;
  /**
   * Duration in milliseconds to show success/error messages (default: 3000)
   */
  newsletterMessageDuration?: number;
  /**
   * Additional CSS classes
   */
  className?: string;
}
