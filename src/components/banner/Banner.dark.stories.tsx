import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Banner } from "./";
import { BannerProps } from "./Banner.types";

export default {
  title: "socraft-ui/Banner/Dark-mode",
  component: Banner,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

const Template: StoryFn<BannerProps> = (args) => <Banner {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: "Événement Nocturne",
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
              "Une session spéciale en soirée pour les passionnés de code.",
            nodeType: "text",
          },
        ],
        nodeType: "paragraph",
      },
    ],
    nodeType: "document",
  },
  visibility: true,
  date: "2024-07-22T20:00:00+00:00",
  link: "https://www.example.com/inscription-dark",
};
