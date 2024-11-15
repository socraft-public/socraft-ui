import { StoryFn, Meta } from "@storybook/react";
import Input from "./Input";
import React from "react";
import { IconAt } from "@tabler/icons-react";

export default {
  title: "socraft-ui/Input",
  component: Input,
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const BaseInput = Template.bind({});
export const InputWithStartIcon = Template.bind({});
export const InputWithEndIcon = Template.bind({});
export const InputWithError = Template.bind({});

BaseInput.args = {
  placeholder: "Adresse E-Mail",
};

InputWithStartIcon.args = {
  ...BaseInput.args,
  startIcon: <IconAt />,
};

InputWithEndIcon.args = {
  ...BaseInput.args,
  endIcon: <IconAt />,
};

InputWithError.args = {
  ...BaseInput.args,
  startIcon: <IconAt />,
  errorMessage: "L'adresse e-mail est invalide",
};
