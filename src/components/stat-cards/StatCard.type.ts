export interface StatCardType {
  /**
   * The title of the stat card
   */
  title: string;
  /**
   * The value of the stat card
   */
  value: number;
  /**
   * The link of the stat card
   */
  link: {
    title: string;
    url: string;
  };
  /**
   * Whether the stat card should be displayed in dark mode
   */
  darkMode?: boolean;
}
