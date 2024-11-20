import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Footer from "./Footer";
import { FooterProps } from "./Footer.types";

export default {
  title: "socraft-ui/Footer",
  component: Footer,
} as Meta;

const Template: StoryFn<FooterProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  cities: "Lausanne - Genève - Zürich - Paris - Casablanca",
  address: "Avenue du Léman 2\n 1005 Lausanne\nSuisse",
  copyright: "© 2023 Votre Société",
  cguLink: "#",
  cguText: "Conditions générales d'utilisation",
  instagramLink: "#",
  linkedinLink: "#",
  facebookLink: "#",
  youtubeLink: "#",
};
