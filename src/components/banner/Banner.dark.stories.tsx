import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Banner } from "./";
import { BannerProps } from "./Banner.types";

export default {
  title: "socraft-ui/Banner/Dark-mode",
  component: Banner,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

const Template: StoryFn<BannerProps> = (args) => <Banner {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: "Événement Nocturne",
  description: "Une session spéciale en soirée pour les passionnés de code.",
  visibility: true,
  date: "Le 22 juillet 2024 à 20h00",
  link: "https://www.example.com/inscription-dark",
};
