import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ToggleSwitch } from "./";
import { ToggleSwitchProps } from "./ToggleSwitch.types";

export default {
  title: "socraft-ui/ToggleSwitch/Dark-mode",
  component: ToggleSwitch,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

const Template: StoryFn<ToggleSwitchProps> = (args) => (
  <ToggleSwitch {...args} />
);

export const Default = Template.bind({});

Default.args = {
  darkMode: true,
};
