import { StoryFn, Meta } from "@storybook/react";
import Profile from "./Profile";
import React from "react";

export default {
  title: "socraft-ui/Profile",
  component: Profile,
  decorators: [
    (Story, context) => (
      <div
        style={{
          backgroundColor: context.args.darkMode ? "#282828" : "transparent",
          padding: "5em",
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Profile>;

const Template: StoryFn<typeof Profile> = (args) => <Profile {...args} />;

export const DefaultProfile = Template.bind({});
export const OpenToWorkProfile = Template.bind({});
export const DarkProfile = Template.bind({});
export const DarkOpenToWorkProfile = Template.bind({});

DefaultProfile.args = {
  crafter: {
    shortId: "farbou",
    firstname: "Farhdine",
    linkedin: "https://www.linkedin.com/in/farhdine",
    profilePicture:
      "https://www.gravatar.com/avatar/36a5f0dd82b6823d76ad795a0e56c01e74cb1aefb5cb13b2126c557a07087617?s=500&d=https://avatars.slack-edge.com/2023-02-01/4735569099092_250e4584903fddadc1ac_132.png",
    id: "16d223c7-808f-4c2e-9223-c23fedebedc1",
    job: "Entrepreneur",
    openToWork: false,
  },
};

OpenToWorkProfile.args = {
  crafter: {
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

DarkProfile.args = {
  ...DefaultProfile.args,
  darkMode: true,
};

DarkOpenToWorkProfile.args = {
  ...OpenToWorkProfile.args,
  darkMode: true,
};
