import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Footer from "./Footer";

export default {
  title: "socraft-ui/Footer/Light-mode",
  component: Footer,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
      ],
    },
  },
} as Meta;

const Template: StoryFn<typeof Footer> = (args) => <Footer {...args} />;

export const DefaultFooter = Template.bind({});
export const WithBadges = Template.bind({});

DefaultFooter.args = {
  cities: ["Lausanne", "Genève", "Zurich", "Paris", "Casablanca"],
  address: "Avenue du Léman 2, 1005 Lausanne, Suisse",
  contactAddress: "info@socraft.ch",
  cguLink: "#",
  cguText: "Conditions générales d'utilisation",
  instagramLink: "https://www.instagram.com/socraft.io/",
  linkedinLink:
    "https://www.linkedin.com/company/socraft-ch/posts/?feedView=all",
  githubLink: "https://github.com/socraft-public",
  facebookLink: "https://www.facebook.com/socraft.ch",
  youtubeLink: "https://www.youtube.com/@socraft",
  usefulLinksTitle: "Liens utiles",
  usefulLinks: [
    { title: "Contact", href: "/contact" },
    { title: "À propos", href: "/about" },
    { title: "Blog", href: "/blog" },
    { title: "CGU", href: "/cgu" },
  ],
  newsletterDescription:
    "Votre adresse mail sera exclusivement utilisée pour recevoir la newsletter de socraft. Nous respectons vos données et vous pourrez vous désinscrire à tout moment.",
};

WithBadges.args = {
  cities: ["Lausanne", "Genève", "Zurich", "Paris", "Casablanca"],
  address: "Avenue du Léman 2, 1005 Lausanne, Suisse",
  contactAddress: "info@socraft.ch",
  cguLink: "#",
  cguText: "Conditions générales d'utilisation",
  instagramLink: "https://www.instagram.com/socraft.io/",
  linkedinLink:
    "https://www.linkedin.com/company/socraft-ch/posts/?feedView=all",
  githubLink: "https://github.com/socraft-public",
  facebookLink: "https://www.facebook.com/socraft.ch",
  youtubeLink: "https://www.youtube.com/@socraft",
  badges: ["Badge Example 1"],
  usefulLinksTitle: "Liens utiles",
  usefulLinks: [
    { title: "Contact", href: "/contact" },
    { title: "À propos", href: "/about" },
    { title: "Blog", href: "/blog" },
    { title: "CGU", href: "/cgu" },
  ],
  newsletterDescription:
    "Votre adresse mail sera exclusivement utilisée pour recevoir la newsletter de socraft. Nous respectons vos données et vous pourrez vous désinscrire à tout moment.",
};
