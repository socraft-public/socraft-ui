export interface NavBarProps {
  /**
   * The tabs to display in the navbar
   */
  tabs: {
    title: string;
    url: string;
  }[];
  /**
   * The buttons to display in the navbar
   */
  buttons: {
    title: string;
    url: string;
  }[];
  /**
   * Whether to display the navbar in dark mode
   */
  darkMode?: boolean;
}