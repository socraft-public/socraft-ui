export interface LocaleSelectorProps {
  options: string[];
  value: string;
  onChange: (locale: string) => void;
  darkMode?: boolean;
}
