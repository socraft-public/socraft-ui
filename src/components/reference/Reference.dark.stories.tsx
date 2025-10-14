import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Reference } from "./";
import { ReferenceProps } from "./Reference.types";
import logo from "../../assets/logo-light.svg";

export default {
  title: "socraft-ui/Reference/Dark-mode",
  component: Reference,
  parameters: {
    backgrounds: {
      default: "gray",
    },
  },
} as Meta;

const Template: StoryFn<ReferenceProps> = (args) => <Reference {...args} />;

export const Default = Template.bind({});

Default.args = {
  logo,
  title: "Titre de référence",
  category: ["Catégorie 1", "Catégorie 2"],
  darkMode: true,
};
