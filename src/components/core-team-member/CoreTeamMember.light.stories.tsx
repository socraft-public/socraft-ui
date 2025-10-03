import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { CoreTeamMember } from "./";
import { CoreTeamMemberProps } from "./CoreTeamMember.types";

export default {
  title: "socraft-ui/CoreTeamMember/Light-mode",
  component: CoreTeamMember,
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
} as Meta;

const Template: StoryFn<CoreTeamMemberProps> = (args) => (
  <CoreTeamMember {...args} />
);

export const Default = Template.bind({});

Default.args = {
  image: "https://placehold.co/400",
  fullname: "John Doe",
  role: "Software Engineer",
};
