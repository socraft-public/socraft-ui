import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Craftwork } from "./";
import { CraftworkProps } from "./Craftwork.types";

export default {
  title: "socraft-ui/Craftwork/Light-mode",
  component: Craftwork,
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
} as Meta;

const Template: StoryFn<CraftworkProps> = (args) => <Craftwork {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: "Eskimo",
  pitch:
    "A state of the art Big Data Analytics Infrastructure and Management Web Console to build, manage and operate Big Data 2.0 Analytics clusters on Kubernetes",
  domain: "IT",
  website: "https://www.eskimo.sh/",
  holder: {
    shortId: "farbou",
    firstname: "Farhdine",
    linkedin: "https://www.linkedin.com/in/farhdine",
    profilePicture:
      "https://www.gravatar.com/avatar/36a5f0dd82b6823d76ad795a0e56c01e74cb1aefb5cb13b2126c557a07087617?s=500&d=https://avatars.slack-edge.com/2023-02-01/4735569099092_250e4584903fddadc1ac_132.png",
    id: "16d223c7-808f-4c2e-9223-c23fedebedc1",
    job: "Entrepreneur",
    openToWork: true,
  },
};
