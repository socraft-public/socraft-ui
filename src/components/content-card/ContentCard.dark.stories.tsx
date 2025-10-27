import { IconExternalLink } from "@tabler/icons-react";
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ContentCard } from ".";
import { ContentCardProps } from "./ContentCard.types";

export default {
  title: "socraft-ui/Content Card/Dark-mode",
  component: ContentCard,
  decorators: [
    (Story) => (
      <div className="dark w-full mx-auto">
        <Story />
      </div>
    ),
  ],
  parameters: {
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

const Template: StoryFn<ContentCardProps> = (args) => <ContentCard {...args} />;

export const Default = Template.bind({});
export const MultipleHolders = Template.bind({});

Default.args = {
  name: "Eskimo",
  pitch:
    "A state of the art Big Data Analytics Infrastructure and Management Web Console to build, manage and operate Big Data 2.0 Analytics clusters on Kubernetes",
  domain: "IT",
  website: "https://www.eskimo.sh/",
  holders: [
    {
      shortId: "farbou",
      firstname: "Farhdine",
      linkedin: "https://www.linkedin.com/in/farhdine",
      profilePicture:
        "https://www.gravatar.com/avatar/36a5f0dd82b6823d76ad795a0e56c01e74cb1aefb5cb13b2126c557a07087617?s=500&d=https://avatars.slack-edge.com/2023-02-01/4735569099092_250e4584903fddadc1ac_132.png",
      id: "16d223c7-808f-4c2e-9223-c23fedebedc1",
      job: "Entrepreneur",
      openToWork: true,
    },
  ],
  actionIcon: IconExternalLink,
};

MultipleHolders.args = {
  name: "socraft",
  pitch:
    "A comprehensive platform for managing and showcasing software craftsmanship projects, connecting developers and fostering collaboration in the tech community",
  domain: "IT",
  website: "https://www.socraft.io/",
  holders: [
    {
      shortId: "farbou",
      firstname: "Farhdine",
      linkedin: "https://www.linkedin.com/in/farhdine",
      profilePicture:
        "https://www.gravatar.com/avatar/36a5f0dd82b6823d76ad795a0e56c01e74cb1aefb5cb13b2126c557a07087617?s=500&d=https://avatars.slack-edge.com/2023-02-01/4735569099092_250e4584903fddadc1ac_132.png",
      id: "16d223c7-808f-4c2e-9223-c23fedebedc1",
      job: "Entrepreneur",
      openToWork: true,
    },
    {
      shortId: "romfel",
      firstname: "Romain",
      linkedin: "https://www.linkedin.com/in/rfldn/",
      profilePicture:
        "https://storage.googleapis.com/mysocraft-a456a.appspot.com/profilePictures/romain@socraft.ch",
      id: "b599e71d-f0b4-46bc-93ab-6b8c8e35f9f3",
      job: "Product Designer",
      openToWork: false,
    },
  ],
  actionIcon: IconExternalLink,
};
