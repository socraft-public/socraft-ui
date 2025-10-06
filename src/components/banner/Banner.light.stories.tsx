import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Banner } from "./";
import { BannerProps } from "./Banner.types";

export default {
  title: "socraft-ui/Banner/Light-mode",
  component: Banner,
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
} as Meta;

const Template: StoryFn<BannerProps> = (args) => <Banner {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: "Ton événement",
  description:
    "Rejoignez-nous pour une session interactive sur les dernières technologies web.",
  visibility: true,
  date: "Le 15 juillet 2024 à 18h00",
  link: "https://www.example.com/inscription-light",
};
