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
export const DarkMode = Template.bind({});

Default.args = {
  /**
   * The cities where the company is located
   */
  cities: ["Lausanne", "Genève", "Zurich", "Paris", "Casablanca"],
  /**
   * The address of the company
   */
  address: "Avenue du Léman 2\n 1005 Lausanne\nSuisse",
  /**
   * The text to display for the copyright
   */
  copyright: "© 2025 socraft",
  /**
   * Link for CGU
   */
  cguLink: "#",
  /**
   * Text displayed for CGU
   */
  cguText: "Conditions générales d'utilisation",
  /**
   * The buttons to display in the center of the footer
   */
  instagramLink: "#",
  linkedinLink: "#",
  facebookLink: "#",
  youtubeLink: "#",
};
DarkMode.args = {
  ...Default.args,
  darkMode: true,
};
