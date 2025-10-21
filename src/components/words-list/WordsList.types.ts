export interface WordsListProps {
  /**
   * List of words to display
   */
  words: string[];
  /**
   * Dark mode
   */
  darkMode?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Size of the words
   */
  size?: "sm" | "default" | "lg";
  /**
   * Type of separator between words
   */
  separator?: "dot" | "pipe" | "slash";
}
