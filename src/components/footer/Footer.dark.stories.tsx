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
  githubLink: "#",
  facebookLink: "#",
  youtubeLink: "#",
  darkMode: true,
  centerButtonsText: "Contactez-nous",
  centerButtons: [
    <Button key={1} variant="outlined" darkMode className="gap-2">
      <IconMessage className="h-4 w-4" />
      Nous écrire
    </Button>,
    <Button key={2} variant="outlined" darkMode className="gap-2">
      <IconPhone className="h-4 w-4" />
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
  githubLink: "#",
  facebookLink: "#",
  youtubeLink: "#",
  centerButtonsText: "Contactez-nous",
  centerButtons: [
    <Button key={1} variant="outlined" darkMode className="gap-2">
      <IconMessage className="h-4 w-4" />
      Nous écrire
    </Button>,
    <Button key={2} variant="outlined" darkMode className="gap-2">
      <IconPhone className="h-4 w-4" />
      Nous appeler
    </Button>,
  ],
  badges: ["Badge Example 1", "Badge Example 2"],
  darkMode: true,
  newsletterText: "Newsletter",
  newsletterPlaceholder: "Entrez votre email...",
  newsletterButtonText: "S'abonner",
  onNewsletterSubmit: (email: string) => {
    console.log("Newsletter subscription:", email);
  },
};
