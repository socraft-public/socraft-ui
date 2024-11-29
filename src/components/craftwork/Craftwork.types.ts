import { Crafter } from "../profile/Profile.types";

export interface CraftworkProps {
  name: string;
  domain: string;
  holder?: Crafter;
  pitch: string;
  website: string;
  partnershipLevel?: string;
  stageOfDevelopment?: string;
  darkMode?: boolean;
}
