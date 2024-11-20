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
Default.args = {
  logo: require("../../Assets/logo-dark.svg"),
  tabs: [
    { title: "Home", url: "/home" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
  ],
  buttons: [{ title: "Sign In", url: "/signin" }],
};
