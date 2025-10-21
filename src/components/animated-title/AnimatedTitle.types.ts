/**
 * Interface for the AnimatedTitle component
 */
export interface AnimatedTitleProps {
  /**
   * The static part of the title
   **/
  staticPart: string;
  /**
   * The dynamic part of the title
   **/
  yellowWords: string[];
  /**
   * The font size of the title
   */
  fontSize?: number;
  /**
   * The font weight of the title
   */
  fontWeight?: number;
  /**
   * Whether the title is in dark mode
   */
  darkMode?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
}
