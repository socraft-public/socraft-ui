export interface NavBarProps {
  /**
   * The URL of the active tab
   */
  activeTabUrl: string;
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
    appearance: "yellow" | "link";
  }[];
  /**
   * Whether to display the navbar in dark mode
   */
  darkMode?: boolean;
  /**
   * Whether the navbar is transparent
   */
  transparent?: boolean;
}
