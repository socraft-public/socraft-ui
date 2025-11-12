import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import NavBar from "./NavBar";
import { NavBarProps } from "./NavBar.types";
import "../../styles/globals.css";

export default {
  title: "socraft-ui/NavBar/Light-mode",
  component: NavBar,
  backgrounds: {
    default: "light",
    values: [
      {
        name: "light",
        value: "#ffffff",
      },
    ],
  },
} as Meta;

const Template: StoryFn<NavBarProps> = (args) => (
  <div className="min-h-screen">
    <NavBar {...args} />
  </div>
);

export const Default = Template.bind({});
export const WithDarkModeToggle = Template.bind({});
export const WithLocaleSelector = Template.bind({});
export const WithTwoLevelMenu = Template.bind({});

Default.args = {
  activeTabUrl: "/home",
  tabs: [
    { title: "Accueil", url: "/home" },
    { title: "A Propops", url: "#" },
    { title: "Expertises", url: "#" },
    { title: "References", url: "#" },
    { title: "Formations", url: "#" },
    { title: "Blogs", url: "#" },
  ],
  buttons: [{ title: "Communauté", url: "/contact", appearance: "yellow" }],
};

WithDarkModeToggle.args = {
  ...Default.args,
  showDarkModeToggle: true,
  darkModeText: "Mode sombre",
  onDarkModeToggle: (enabled: boolean) => console.log("Dark mode:", enabled),
};

WithLocaleSelector.args = {
  ...WithDarkModeToggle.args,
  showLocaleSelector: true,
  locale: "FR",
  locales: ["FR", "EN", "DE", "IT"],
  onLocaleChange: (locale: string) => console.log("Locale changed:", locale),
};

WithTwoLevelMenu.args = {
  ...WithLocaleSelector.args,
  tabs: [
    { title: "Accueil", url: "/home" },
    { title: "Craftworks", url: "#" },
    {
      title: "Services",
      url: "",
      children: [
        { title: "Service 1", url: "/craftwork-1" },
        { title: "Service 2", url: "/craftwork-2" },
        {
          title: "Service en grand avec beaucoup de texte",
          url: "/craftwork-3",
        },
      ],
    },
  ],
};
