import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ThemeToggle } from ".";
import { ThemeToggleProps } from "./ThemeToggle.types";

export default {
  title: "socraft-ui/ThemeToggle/Dark-mode",
  component: ThemeToggle,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

const Template: StoryFn<ThemeToggleProps> = (args) => <ThemeToggle {...args} />;

export const Default = Template.bind({});

Default.args = {
  darkMode: true,
};
