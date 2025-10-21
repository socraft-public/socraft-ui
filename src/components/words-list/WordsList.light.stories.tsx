import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { WordsList } from "./";
import { WordsListProps } from "./WordsList.types";

export default {
  title: "socraft-ui/WordsList/Light-mode",
  component: WordsList,
  parameters: {
    backgrounds: {
      default: "gray",
    },
  },
  argTypes: {
    separator: {
      control: { type: "select" },
      options: ["dot", "pipe", "slash", "none"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "default", "lg"],
    },
  },
} as Meta;

const Template: StoryFn<WordsListProps> = (args) => <WordsList {...args} />;

export const DefaultWordsList = Template.bind({});
DefaultWordsList.args = {
  words: ["Innovation", "Créativité", "Excellence"],
  darkMode: false,
};

export const WithPipeSeparator = Template.bind({});
WithPipeSeparator.args = {
  words: ["Design", "Développement", "Marketing", "Stratégie"],
  darkMode: false,
  separator: "pipe",
};

export const WithSlashSeparator = Template.bind({});
WithSlashSeparator.args = {
  words: ["Frontend", "Backend", "DevOps"],
  darkMode: false,
  separator: "slash",
};
