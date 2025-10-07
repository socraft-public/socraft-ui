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
    opensTheLinkInNewTab?: boolean;
  }[];
  /**
   * Whether to display the navbar in dark mode
   */
  darkMode?: boolean;
  /**
   * Whether the navbar is transparent
   */
  transparent?: boolean;
  /**
   * Whether to show the dark mode toggle
   */
  showDarkModeToggle?: boolean;
  /**
   * The text above the dark mode switch
   */
  darkModeText?: string;
  /**
   * The function to call when the dark mode toggle is clicked
   */
  onDarkModeToggle?: (enabled: boolean) => void;
  /**
   * Wheter to show the locale selector
   */
  showLocaleSelector?: boolean;
  /**
   * The function to call when the locale is changed
   */
  onLocaleChange?: (locale: string) => void;
  /**
   * The current locale
   */
  locale?: string;
  /**
   * The list of available locales
   */
  locales?: string[];
}
