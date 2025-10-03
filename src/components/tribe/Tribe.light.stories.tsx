import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Tribe } from "./";
import { TribeProps } from "./Tribe.types";
import { Crafter } from "../profile/Profile.types";

export default {
  title: "socraft-ui/Tribe/Light-mode",
  component: Tribe,
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
} as Meta;

const Template: StoryFn<TribeProps> = (args) => <Tribe {...args} />;

const mockCrafters: Crafter[] = [
  {
    id: "1",
    firstname: "John",
    shortId: "doejoh",
    profilePicture: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    firstname: "John",
    shortId: "doejoh",
    profilePicture: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    firstname: "John",
    shortId: "doejoh",
    profilePicture: "https://via.placeholder.com/150",
  },
  {
    id: "4",
    firstname: "John",
    shortId: "doejoh",
    profilePicture: "https://via.placeholder.com/150",
  },
  {
    id: "5",
    firstname: "John",
    shortId: "doejoh",
    profilePicture: "https://via.placeholder.com/150",
  },
];

export const Default = Template.bind({});

Default.args = {
  name: "Développment (craft)",
  description:
    "Avec un nom comme socraft, nous ne pourrions pas faire l'impasse sur le software craftsmanship. Plus qu'un manifeste, il est pour nous une philosophie de vie dont les principes vont bien au-delà du code. Ainsi vous trouverez régulièrement des crafters affairés à creuser un sujet lors d'un meetup, expérimenter une nouvelle façon de tester au cours d'un atelier mob programming, ou plus simplement appliquer ces pratiques au sein d'une équipe de développement produit.",
  image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
  crafters: mockCrafters,
  showMoreText: "En savoir plus",
  opensTheProfileInANewTab: true,
};
