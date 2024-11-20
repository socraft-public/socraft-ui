/**
 * Props for the Profile component.
 */
export interface ProfileProps {
  /**
   * The crafter object containing details about the individual.
   */
  crafter: Crafter;

  /**
   * Determines if clicking the profile opens it in the current tab or page.
   * Default behavior if not specified.
   */
  opensTheProfile?: boolean;

  /**
   * Determines if clicking the profile opens it in a new tab.
   * If `true`, this overrides `opensTheProfile`.
   */
  opensTheProfileInANewTab?: boolean;
}

/**
 * Interface for a crafter's profile.
 */
export interface Crafter {
  /**
   * Optional unique identifier for the profile.
   */
  id?: string;

  /**
   * The job title or occupation of the individual.
   */
  job?: string;

  /**
   * An optional short identifier for the profile.
   */
  shortId?: string;

  /**
   * LinkedIn profile URL of the individual.
   */
  linkedin?: string;

  /**
   * First name of the individual.
   */
  firstname?: string;

  /**
   * URL to the profile picture of the individual.
   */
  profilePicture?: string;

  /**
   * Optional string identifier for all contact videos associated with HubSpot (if applicable).
   */
  hs_all_contact_vids?: string;

  /**
   * A short biography or description of the individual.
   */
  bio?: string;

  /**
   * Indicates if the individual is open to work opportunities.
   */
  openToWork?: boolean;

  /**
   * An array of trainings completed by the individual.
   * This should be further specified if needed.
   */
  trainings?: [];

  /**
   * A testimonial or review about the individual.
   */
  testimonial?: string;
}
