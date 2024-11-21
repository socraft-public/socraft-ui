import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import NavBar from "./NavBar";
import { NavBarProps } from "./NavBar.types";

export default {
  title: "socraft-ui/NavBar",
  component: NavBar,
} as Meta;

const Template: StoryFn<NavBarProps> = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
export const DarkMode = Template.bind({});

Default.args = {
  tabs: [
    {
      title: "An active link",
      url: "/?path=/story/socraft-ui-navbar--default",
    },
    { title: "Home", url: "/home" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
  ],
  buttons: [{ title: "Sign In", url: "/signin" }],
};

DarkMode.args = {
  ...Default.args,
  darkMode: true,
};
