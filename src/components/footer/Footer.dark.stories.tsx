import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Footer from "./Footer";
import { FooterProps } from "./Footer.types";
import { Button } from "../button";
import { IconMessage, IconPhone } from "@tabler/icons-react";

export default {
  title: "socraft-ui/Footer/Dark-mode",
  component: Footer,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

const Template: StoryFn<FooterProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
export const WithDarkModeToggle = Template.bind({});
export const WithLocaleSelector = Template.bind({});
export const WithBadges = Template.bind({});

Default.args = {
  cities: ["Lausanne", "Genève", "Zurich", "Paris", "Casablanca"],
  address: "Avenue du Léman 2\n 1005 Lausanne\nSuisse",
  copyright: "© 2025 socraft",
  cguLink: "#",
  cguText: "Conditions générales d'utilisation",
  socialNetworksText: "Suivez-nous sur les réseaux sociaux",
  instagramLink: "#",
  linkedinLink: "#",
  facebookLink: "#",
  youtubeLink: "#",
  darkMode: true,
  centerButtonsText: "Contactez-nous",
  centerButtons: [
    <Button key={1} variant="yellow" endIcon={<IconMessage />}>
      Nous écrire
    </Button>,
    <Button key={2} variant="yellow" endIcon={<IconPhone />}>
      Nous appeler
    </Button>,
  ],
};

WithDarkModeToggle.args = {
  cities: ["Lausanne", "Genève", "Zurich", "Paris", "Casablanca"],
  address: "Avenue du Léman 2\n 1005 Lausanne\nSuisse",
  copyright: "© 2025 socraft",
  cguLink: "#",
  cguText: "Conditions générales d'utilisation",
  socialNetworksText: "Suivez-nous sur les réseaux sociaux",
  instagramLink: "#",
  linkedinLink: "#",
  facebookLink: "#",
  youtubeLink: "#",
  darkMode: true,
  centerButtonsText: "Contactez-nous",
  centerButtons: [
    <Button key={1} variant="yellow" endIcon={<IconMessage />}>
      Nous écrire
    </Button>,
    <Button key={2} variant="yellow" endIcon={<IconPhone />}>
      Nous appeler
    </Button>,
  ],
  showDarkModeToggle: true,
  onDarkModeToggle: (enabled: boolean) => console.log(enabled),
};

WithLocaleSelector.args = {
  cities: ["Lausanne", "Genève", "Zurich", "Paris", "Casablanca"],
  address: "Avenue du Léman 2\n 1005 Lausanne\nSuisse",
  copyright: "© 2025 socraft",
  cguLink: "#",
  cguText: "Conditions générales d'utilisation",
  socialNetworksText: "Suivez-nous sur les réseaux sociaux",
  instagramLink: "#",
  linkedinLink: "#",
  facebookLink: "#",
  youtubeLink: "#",
  centerButtonsText: "Contactez-nous",
  centerButtons: [
    <Button key={1} variant="yellow" endIcon={<IconMessage />}>
      Nous écrire
    </Button>,
    <Button key={2} variant="yellow" endIcon={<IconPhone />}>
      Nous appeler
    </Button>,
  ],
  showLocaleSelector: true,
  locales: ["fr", "en"],
  onLocaleChange: (locale: string) => console.log(locale),
  locale: "fr",
  darkMode: true,
};

WithBadges.args = {
  cities: ["Lausanne", "Genève", "Zurich", "Paris", "Casablanca"],
  address: "Avenue du Léman 2\n 1005 Lausanne\nSuisse",
  copyright: "© 2025 socraft",
  cguLink: "#",
  cguText: "Conditions générales d'utilisation",
  socialNetworksText: "Suivez-nous sur les réseaux sociaux",
  instagramLink: "#",
  linkedinLink: "#",
  facebookLink: "#",
  youtubeLink: "#",
  centerButtonsText: "Contactez-nous",
  centerButtons: [
    <Button key={1} variant="yellow" endIcon={<IconMessage />}>
      Nous écrire
    </Button>,
    <Button key={2} variant="yellow" endIcon={<IconPhone />}>
      Nous appeler
    </Button>,
  ],
  showLocaleSelector: true,
  locales: ["fr", "en"],
  onLocaleChange: (locale: string) => console.log(locale),
  locale: "fr",
  badges: [
    <div className="example-badge">I'm a badge !</div>,
    <div className="example-badge">I'm another badge !</div>,
  ],
  darkMode: true,
};
