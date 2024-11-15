import { StoryFn, Meta } from "@storybook/react";
import Button from "./Button";
import React from "react";

export default {
  title: "socraft-ui/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const ButtonTest = Template.bind({});

ButtonTest.args = {
  text: "I'm a button",
};
