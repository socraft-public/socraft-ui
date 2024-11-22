import { StoryFn, Meta } from "@storybook/react";
import Button from "./Button";
import React from "react";
import { IconHome } from "@tabler/icons-react";

export default {
  title: "socraft-ui/Button/Dark-mode",
  component: Button,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
export const BlackButton = Template.bind({});
export const OutlinedButton = Template.bind({});
export const WithIcon = Template.bind({});

DefaultButton.args = {
  children: <span>I&apos;m a button</span>,
  variant: "yellow",
  darkMode: true,
};

BlackButton.args = {
  children: <span>I&apos;m a black button</span>,
  variant: "black",
  darkMode: true,
};

OutlinedButton.args = {
  children: <span>I&apos;m an outlined button</span>,
  variant: "outlined",
  darkMode: true,
};

WithIcon.args = {
  children: <span>I&apos;m a button with an icon</span>,
  variant: "outlined",
  endIcon: <IconHome />,
  darkMode: true,
};
