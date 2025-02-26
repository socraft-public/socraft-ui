import { StoryFn, Meta } from "@storybook/react";
import AnimatedTitle from "./AnimatedTitle";
import React from "react";

export default {
  title: "socraft-ui/Animated-title/Dark-mode",
  component: AnimatedTitle,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta<typeof AnimatedTitle>;

const Template: StoryFn<typeof AnimatedTitle> = (args) => (
  <AnimatedTitle {...args} />
);

export const AnimatedTitleWithSeveralYellowWords = Template.bind({});
export const AnimatedTitleWithOneYellowWord = Template.bind({});

AnimatedTitleWithSeveralYellowWords.args = {
  staticPart: "Hello",
  yellowWords: ["World", "Universe", "Galaxy"],
  darkMode: true,
};

AnimatedTitleWithOneYellowWord.args = {
  staticPart: "Hello",
  yellowWords: ["World"],
  darkMode: true,
};
