import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { LocaleSelector } from "./";
import { LocaleSelectorProps } from "./LocaleSelector.types";

export default {
  title: "socraft-ui/LocaleSelector/Light-mode",
  component: LocaleSelector,
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
} as Meta;

const Template: StoryFn<LocaleSelectorProps> = (args) => (
  <LocaleSelector {...args} />
);

export const Default = Template.bind({});

const value = "EN";

Default.args = {
  options: ["EN", "FR"],
  onChange: () => void 0,
  value,
};
