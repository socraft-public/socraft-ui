export interface NavBarProps {
  logo: string;
  tabs: {
    title: string;
    url: string;
  }[];
  buttons: {
    title: string;
    url: string;
  }[];
}
