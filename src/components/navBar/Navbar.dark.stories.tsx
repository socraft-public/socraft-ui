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
    { title: "Home", url: "/home" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
  ],
  buttons: [
    { title: "Link button", url: "/signin", appearance: "link" },
    { title: "Yellow button", url: "/signup", appearance: "yellow" },
  ],
  darkMode: true,
};
