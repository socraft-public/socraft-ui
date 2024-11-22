import { StoryFn, Meta } from "@storybook/react";
import Button from "./Button";
import React from "react";
import { IconHome } from "@tabler/icons-react";

export default {
  title: "socraft-ui/Button",
  component: Button,
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
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
export const BlackButton = Template.bind({});
export const OutlinedButton = Template.bind({});
export const WithIcon = Template.bind({});
export const DarkModeButton = Template.bind({});

DefaultButton.args = {
  children: <span>I&apos;m a button</span>,
  variant: "yellow",
};

BlackButton.args = {
  children: <span>I&apos;m a black button</span>,
  variant: "black",
};

OutlinedButton.args = {
  children: <span>I&apos;m an outlined button</span>,
  variant: "outlined",
};

WithIcon.args = {
  children: <span>I&apos;m a button with an icon</span>,
  variant: "outlined",
  endIcon: <IconHome />,
};

DarkModeButton.args = {
  children: <span>I&apos;m a dark mode button</span>,
  variant: "outlined",
  darkMode: true,
};
