import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Banner } from "./";
import { BannerProps } from "./Banner.types";

export default {
  title: "socraft-ui/Banner/Light-mode",
  component: Banner,
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
} as Meta;

const Template: StoryFn<BannerProps> = (args) => <Banner {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: "Ton événement",
  description: {
    data: {},
    content: [
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value:
              "Rejoignez-nous pour une session interactive sur les dernières technologies web.",
            nodeType: "text",
          },
        ],
        nodeType: "paragraph",
      },
    ],
    nodeType: "document",
  },
  visibility: true,
  date: "2024-07-15T18:00:00+00:00",
  link: "https://www.example.com/inscription-light",
};
