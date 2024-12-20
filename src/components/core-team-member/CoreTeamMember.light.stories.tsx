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
  image: "https://via.placeholder.com/150",
  fullname: "John Doe",
  role: "Software Engineer",
};
