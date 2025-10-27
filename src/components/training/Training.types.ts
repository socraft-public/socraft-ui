import { ReactNode } from "react";

/**
 * Props for the Training component.
 */
export interface TrainingProps {
  /**
   * The training object containing details about the training session.
   */
  training: TrainingWithId;

  /**
   * Optional click handler for when the component is clicked.
   */
  onClick?: () => void;
  /**
   * The language to use for the component, affecting text content.
   */
  language?: "en" | "fr";
}

/**
 * Represents a training session.
 */
export interface Training {
  /**
   * The target audience for the training (e.g., beginners, experts).
   */
  audience?: string;

  /**
   * The category of the training (e.g., programming, design).
   */
  category?: string;

  /**
   * Additional comments or notes about the training.
   */
  comment?: string;

  /**
   * A description of the training session.
   */
  description?: ReactNode | string;

  /**
   * The duration of the training (e.g., "2 hours", "3 days").
   */
  duration?: string;

  /**
   * The format of the training (e.g., in-person, online).
   */
  format?: string;

  /**
   * The objectives or goals of the training.
   */
  objectives?: string;

  /**
   * Any prerequisites needed before attending the training.
   */
  prerequisites?: string;

  /**
   * The price of the training, if applicable.
   */
  price?: string;

  /**
   * The title or name of the training.
   */
  title?: string;

  /**
   * An array of trainers leading the training session.
   */
  trainers?: Trainer[];

  /**
   * An array of trainer IDs associated with the training session.
   */
  trainersIds?: string[];

  /**
   * Flag indicating if the training is featured.
   */
  featured?: boolean;
}

/**
 * Represents a trainer.
 */
export interface Trainer {
  /**
   * The first name of the trainer.
   */
  firstname: string;

  /**
   * The URL or path to the profile picture of the trainer.
   */
  profilePicture: string;

  /**
   * An optional short identifier for the trainer.
   */
  shortId?: string;

  /**
   * The unique identifier for the trainer.
   */
  id: string;
}

/**
 * Represents a training session with an ID.
 */
export interface TrainingWithId extends Training {
  /**
   * The unique identifier for the training session.
   */
  id: string;
}
