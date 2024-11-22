import { StoryFn, Meta } from "@storybook/react";
import Input from "./Input";
import React from "react";
import { IconAt } from "@tabler/icons-react";

export default {
  title: "socraft-ui/Input/Dark-mode",
  component: Input,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const DefaultInput = Template.bind({});
export const InputWithStartIcon = Template.bind({});
export const InputWithEndIcon = Template.bind({});
export const InputWithError = Template.bind({});

DefaultInput.args = {
  placeholder: "Adresse E-Mail",
  darkMode: true,
};

InputWithStartIcon.args = {
  ...DefaultInput.args,
  startIcon: <IconAt />,
  darkMode: true,
};

InputWithEndIcon.args = {
  ...DefaultInput.args,
  endIcon: <IconAt />,
  darkMode: true,
};

InputWithError.args = {
  ...DefaultInput.args,
  startIcon: <IconAt />,
  errorMessage: "L'adresse e-mail est invalide",
  darkMode: true,
};
