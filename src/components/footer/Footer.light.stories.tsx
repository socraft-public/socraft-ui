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

Default.args = {
  cities: ["Lausanne", "Genève", "Zurich", "Paris", "Casablanca"],
  address: "Avenue du Léman 2\n 1005 Lausanne\nSuisse",
  copyright: "© 2025 socraft",
  cguLink: "#",
  cguText: "Conditions générales d'utilisation",
  instagramLink: "#",
  linkedinLink: "#",
  facebookLink: "#",
  youtubeLink: "#",
  centerButtons: [
    <Button key={1} variant="yellow" endIcon={<IconMessage />}>
      Nous écrire
    </Button>,
    <Button key={2} variant="yellow" endIcon={<IconPhone />}>
      Nous appeler
    </Button>,
  ],
};
