import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import NavBar from "./NavBar";
import { NavBarProps } from "./NavBar.types";

export default {
  title: "socraft-ui/NavBar/Dark-mode",
  component: NavBar,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

const Template: StoryFn<NavBarProps> = (args) => <NavBar {...args} />;

export const Default = Template.bind({});

Default.args = {
  tabs: [
    { title: "Accueil", url: "/home" },
    { title: "Craftworks", url: "/about" },
  ],
  buttons: [
    { title: "References", url: "/contact", appearance: "link" },
    { title: "Formations", url: "/contact", appearance: "link" },
    { title: "Blog", url: "/contact", appearance: "link" },
    { title: "Communauté", url: "/contact", appearance: "yellow" },
  ],
  darkMode: true,
};
