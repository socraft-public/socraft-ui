import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Reference } from "./";
import { ReferenceProps } from "./Reference.types";
import logo from "../../assets/logo-dark.svg";

export default {
  title: "socraft-ui/Reference/Light-mode",
  component: Reference,
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
} as Meta;

const Template: StoryFn<ReferenceProps> = (args) => <Reference {...args} />;

export const Default = Template.bind({});

Default.args = {
  logo,
  title: "Titre de référence",
  category: ["Catégorie 1", "Catégorie 2"],
};
