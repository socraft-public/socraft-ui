import { StoryFn, Meta } from "@storybook/react";
import AnimatedTitle from "./AnimatedTitle";
import React from "react";

export default {
  title: "socraft-ui/Animated-title/Light-mode",
  component: AnimatedTitle,
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
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
  darkMode: false,
};

export const SingleWord = Template.bind({});
SingleWord.args = {
  staticPart: "Bienvenue dans le",
  yellowWords: ["futur"],
  darkMode: false,
};
