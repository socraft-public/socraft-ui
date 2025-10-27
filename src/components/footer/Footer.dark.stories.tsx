import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Footer from "./Footer";
import { Button } from "../button";
import { IconMessage } from "@tabler/icons-react";

export default {
  title: "socraft-ui/Footer/Dark-mode",
  component: Footer,
  decorators: [
    (Story) => (
      <div className="dark w-full mx-auto">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#1a1a1a",
        },
      ],
    },
  },
} as Meta;

const Template: StoryFn<typeof Footer> = (args) => <Footer {...args} />;

export const DefaultFooter = Template.bind({});
export const WithBadges = Template.bind({});

DefaultFooter.args = {
  cities: ["Lausanne", "Genève", "Paris", "Casablanca"],
  address: "Avenue du Léman 2\n 1005 Lausanne\nSuisse",
  copyright: "© 2025 socraft",
  cguLink: "#",
  cguText: "Conditions générales d'utilisation",
  instagramLink: "https://www.instagram.com/socraft.io/",
  linkedinLink:
    "https://www.linkedin.com/company/socraft-ch/posts/?feedView=all",
  githubLink: "https://github.com/socraft-public",
  facebookLink: "https://www.facebook.com/socraft.ch",
  youtubeLink: "https://www.youtube.com/@socraft",
  centerButtons: [
    <Button key={1} variant="outlined" className="gap-2">
      <IconMessage className="h-4 w-4" />
      Nous écrire
    </Button>,
  ],
  usefulLinksTitle: "Liens utiles",
  usefulLinks: [
    { title: "Blog", href: "/blog" },
    { title: "À propos", href: "/about" },
    { title: "CGU", href: "/cgu" },
  ],
  onNewsletterSubmitAsync: async (email: string) => {
    console.log("Newsletter subscription:", email);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Newsletter subscription completed!");
  },
};

WithBadges.args = {
  cities: ["Lausanne", "Genève", "Paris", "Casablanca"],
  address: "Avenue du Léman 2\n 1005 Lausanne\nSuisse",
  copyright: "© 2025 socraft",
  cguLink: "#",
  cguText: "Conditions générales d'utilisation",
  instagramLink: "https://www.instagram.com/socraft.io/",
  linkedinLink:
    "https://www.linkedin.com/company/socraft-ch/posts/?feedView=all",
  githubLink: "https://github.com/socraft-public",
  facebookLink: "https://www.facebook.com/socraft.ch",
  youtubeLink: "https://www.youtube.com/@socraft",
  centerButtons: [
    <Button key={1} variant="outlined" className="gap-2">
      <IconMessage className="h-4 w-4" />
      Nous écrire
    </Button>,
  ],
  badges: ["Badge Example 1", "Badge Example 2"],
  usefulLinksTitle: "Liens utiles",
  usefulLinks: [
    { title: "Blog", href: "/blog" },
    { title: "À propos", href: "/about" },
    { title: "CGU", href: "/cgu" },
  ],
  onNewsletterSubmitAsync: async (email: string) => {
    console.log("Newsletter subscription:", email);
    if (Math.random() > 0.5) {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      throw new Error("Erreur simulée du serveur");
    }
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Newsletter subscription completed!");
  },
};
