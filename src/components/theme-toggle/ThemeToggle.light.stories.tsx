import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ThemeToggle } from ".";
import { ThemeToggleProps } from "./ThemeToggle.types";

export default {
  title: "socraft-ui/ThemeToggle/Light-mode",
  component: ThemeToggle,
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
} as Meta;

const Template: StoryFn<ThemeToggleProps> = (args) => <ThemeToggle {...args} />;

export const Default = Template.bind({});

Default.args = {
  // Exemple de props par défaut :
  // exampleProp: "valeur par défaut",
};
