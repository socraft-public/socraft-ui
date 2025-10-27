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
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
      ],
    },
  },
} as Meta;

const Template: StoryFn<CoreTeamMemberProps> = (args) => (
  <div className="p-8">
    <CoreTeamMember {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  image:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  fullname: "John Doe",
  role: "Software Engineer",
  darkMode: false,
};
