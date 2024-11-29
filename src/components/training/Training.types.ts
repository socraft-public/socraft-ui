export interface TrainingProps {
  training: TrainingWithId;
  onClick?: () => void;
  darkMode?: boolean;
}

export interface Training {
  audience?: string;
  category?: string;
  comment?: string;
  description?: string;
  duration?: string;
  format?: string;
  objectives?: string;
  prerequisites?: string;
  price?: string;
  title?: string;
  trainers?: Trainer[];
  trainersIds?: string[];
  featured?: boolean;
}

export interface Trainer {
  firstname: string;
  profilePicture: string;
  shortId?: string;
  id: string;
}

export interface TrainingWithId extends Training {
  id: string;
}
