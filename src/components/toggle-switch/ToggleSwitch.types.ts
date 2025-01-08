export interface ToggleSwitchProps {
  /**
   * Whether the toggle switch is in dark mode
   */
  darkMode?: boolean;
  /**
   * The function to call when the toggle switch is clicked
   */
  onToggle?: (checked: boolean) => void;
  /**
   * Whether the toggle switch is checked
   */
  checked?: boolean;
}
