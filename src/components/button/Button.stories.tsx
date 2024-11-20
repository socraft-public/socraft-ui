import { StoryFn, Meta } from "@storybook/react";
import Button from "./Button";
import React from "react";
import { IconHome } from "@tabler/icons-react";

export default {
  title: "socraft-ui/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
export const BlackButton = Template.bind({});
export const OutlinedButton = Template.bind({});
export const WithIcon = Template.bind({});

DefaultButton.args = {
  children: <span>I'm a button</span>,
  variant: "yellow",
};

BlackButton.args = {
  children: <span>I'm a black button</span>,
  variant: "black",
};

OutlinedButton.args = {
  children: <span>I'm an outlined button</span>,
  variant: "outlined",
};

WithIcon.args = {
  children: <span>I'm a button with an icon</span>,
  variant: "outlined",
  endIcon: <IconHome />,
};
