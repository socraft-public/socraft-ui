export interface ReferenceProps {
  /*
   * The URL of the image to display.
   */
  logo: string;
  /*
   * The title of the reference.
   */
  title: string;
  /*
   * The description of the reference
   */
  category: string[];
  /*
   * The onClick event of the reference
   */
  onClick?: () => void;
  /*
   * The dark mode of the reference
   */
  darkMode?: boolean;
  /*
   * Additional CSS classes
   */
  className?: string;
}
