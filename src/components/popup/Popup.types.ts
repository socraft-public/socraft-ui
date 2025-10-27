import { ReactNode } from "react";

export interface PopupProps {
  children: ReactNode;
  title: string;
  subTitle?: string;
  width?: string;
  darkMode?: boolean;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  className?: string;
  /**
   * Apply blur effect to background when popup is open
   */
  blur?: boolean;
}
