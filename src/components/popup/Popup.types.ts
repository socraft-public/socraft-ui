import { DialogProps } from "primereact/dialog";

export interface PopupProps extends Omit<DialogProps, "header" | "footer"> {
  title: string;
  subTitle?: string;
  width?: string;
  darkMode?: boolean;
}
