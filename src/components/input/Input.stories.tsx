import { StoryFn, Meta } from "@storybook/react";
import Input from "./Input";
import React from "react";
import { IconAt } from "@tabler/icons-react";

export default {
  title: "socraft-ui/Input",
  component: Input,
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
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const DefaultInput = Template.bind({});
export const InputWithStartIcon = Template.bind({});
export const InputWithEndIcon = Template.bind({});
export const InputWithError = Template.bind({});
export const DarkModeInput = Template.bind({});
export const DarkModeInputWithStartIcon = Template.bind({});
export const DarkModeInputWithEndIcon = Template.bind({});
export const DarkModeInputWithError = Template.bind({});

DefaultInput.args = {
  placeholder: "Adresse E-Mail",
};

InputWithStartIcon.args = {
  ...DefaultInput.args,
  startIcon: <IconAt />,
};

InputWithEndIcon.args = {
  ...DefaultInput.args,
  endIcon: <IconAt />,
};

InputWithError.args = {
  ...DefaultInput.args,
  startIcon: <IconAt />,
  errorMessage: "L'adresse e-mail est invalide",
};

DarkModeInput.args = {
  ...DefaultInput.args,
  darkMode: true,
};

DarkModeInputWithStartIcon.args = {
  ...InputWithStartIcon.args,
  darkMode: true,
};

DarkModeInputWithEndIcon.args = {
  ...InputWithEndIcon.args,
  darkMode: true,
};

DarkModeInputWithError.args = {
  ...InputWithError.args,
  darkMode: true,
};
