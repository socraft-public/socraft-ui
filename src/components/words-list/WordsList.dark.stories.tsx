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
    },
  },
} as Meta;

const Template: StoryFn<WordsListProps> = (args) => <WordsList {...args} />;

export const DefaultWordsList = Template.bind({});

DefaultWordsList.args = {
  darkMode: true,
  words: ["word1", "word2", "word3"],
};
