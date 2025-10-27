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
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
      ],
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

export const TechCompany = Template.bind({});
TechCompany.args = {
  logo,
  title: "Tech Solutions",
  category: ["Développement", "Innovation"],
  darkMode: false,
};

export const SingleCategory = Template.bind({});
SingleCategory.args = {
  logo,
  title: "Design Studio",
  category: ["UI/UX Design"],
  darkMode: false,
};
