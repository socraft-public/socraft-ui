import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Popup } from "./";
import { PopupProps } from "./Popup.types";

export default {
  title: "socraft-ui/Popup/Light-mode",
  component: Popup,
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
} as Meta;

const Template: StoryFn<PopupProps> = (args) => <Popup {...args} />;

export const Default = Template.bind({});

Default.args = {
  visible: true,
  children: <p>I&apos;m a popup</p>,
  title: "Simple popup",
  subTitle: "This is a simple popup",
};
