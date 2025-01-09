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
   * The number of members in the tribe
   */
  members: number;
  /**
   * The image of the tribe
   */
  image: string;
  /**
   * The slug of the tribe
   */
  slug?: string;
  /**
   * Whether the tribe is in dark mode
   */
  darkMode?: boolean;
}
