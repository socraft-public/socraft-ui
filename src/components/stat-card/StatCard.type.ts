export interface StatCardProps {
  stat: Stat;
  loading?: boolean;
}

export interface Stat {
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
}
