import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ToggleSwitch } from "./";
import { ToggleSwitchProps } from "./ToggleSwitch.types";

export default {
  title: "socraft-ui/ToggleSwitch/Light-mode",
  component: ToggleSwitch,
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
} as Meta;

const Template: StoryFn<ToggleSwitchProps> = (args) => (
  <ToggleSwitch {...args} />
);

export const Default = Template.bind({});

Default.args = {
  // Exemple de props par défaut :
  // exampleProp: "valeur par défaut",
};
