import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Footer from "./Footer";
import { FooterProps } from "./Footer.types";
import { Button } from "../button";
import { IconMessage, IconPhone } from "@tabler/icons-react";

export default {
  title: "socraft-ui/Footer/Light-mode",
  component: Footer,
} as Meta;

const Template: StoryFn<FooterProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
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
  badges: [
    <div className="example-badge" key={1}>
      I&apos;m a badge !
    </div>,
    <div className="example-badge" key={2}>
      I&apos;m another badge !
    </div>,
  ],
};
