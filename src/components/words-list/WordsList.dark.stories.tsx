import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { WordsList } from "./";
import { WordsListProps } from "./WordsList.types";

export default {
  title: "socraft-ui/WordsList/Dark-mode",
  component: WordsList,
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#1a1a1a",
        },
      ],
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
  darkMode: true,
};

export const WithPipeSeparator = Template.bind({});
WithPipeSeparator.args = {
  words: ["Design", "Développement", "Marketing", "Stratégie"],
  darkMode: true,
  separator: "pipe",
};

export const WithSlashSeparator = Template.bind({});
WithSlashSeparator.args = {
  words: ["Frontend", "Backend", "DevOps"],
  darkMode: true,
  separator: "slash",
};
