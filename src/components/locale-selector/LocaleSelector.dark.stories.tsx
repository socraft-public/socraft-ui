import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { LocaleSelector } from "./";
import { LocaleSelectorProps } from "./LocaleSelector.types";

export default {
  title: "socraft-ui/LocaleSelector/Dark-mode",
  component: LocaleSelector,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

const Template: StoryFn<LocaleSelectorProps> = (args) => (
  <LocaleSelector {...args} />
);

export const Default = Template.bind({});

const value = "English";

Default.args = {
  options: ["English", "Français"],
  onChange: () => void 0,
  value,
  darkMode: true,
};
