import { StoryFn, Meta } from "@storybook/react";
import AnimatedTitle from "./AnimatedTitle";
import React from "react";

export default {
  title: "socraft-ui/Animated-title/Dark-mode",
  component: AnimatedTitle,
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
} as Meta<typeof AnimatedTitle>;

const Template: StoryFn<typeof AnimatedTitle> = (args) => (
  <AnimatedTitle {...args} />
);

export const WithSeveralWords = Template.bind({});
WithSeveralWords.args = {
  staticPart: "Hello",
  yellowWords: ["World", "Universe", "Galaxy", "Community"],
  darkMode: true,
};

export const SingleWord = Template.bind({});
SingleWord.args = {
  staticPart: "Bienvenue dans le",
  yellowWords: ["futur"],
  darkMode: true,
};
