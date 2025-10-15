import { StoryFn, Meta } from "@storybook/react";
import { Button } from "./";
import React from "react";
import { IconHome, IconArrowRight } from "@tabler/icons-react";

export default {
  title: "socraft-ui/Button/Dark-mode",
  component: Button,
  parameters: {
    backgrounds: {
      default: "gray",
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const YellowButton = Template.bind({});
export const SocraftLinkButton = Template.bind({});
export const OutlinedButton = Template.bind({});
export const SocraftIconButton = Template.bind({});
export const WithStartIcon = Template.bind({});
export const WithEndIcon = Template.bind({});
export const LoadingButton = Template.bind({});
export const LoadingButtonWithText = Template.bind({});
export const DefaultButton = Template.bind({});
export const DestructiveButton = Template.bind({});
export const OutlineButton = Template.bind({});
export const SecondaryButton = Template.bind({});
export const GhostButton = Template.bind({});
export const LinkButton = Template.bind({});
export const SmallButton = Template.bind({});
export const LargeButton = Template.bind({});
export const IconButton = Template.bind({});

YellowButton.args = {
  children: <span>Yellow Button</span>,
  variant: "yellow",
  darkMode: true,
};

SocraftLinkButton.args = {
  children: <span>Socraft Link Button</span>,
  variant: "socraft-link",
  darkMode: true,
};

OutlinedButton.args = {
  children: <span>Outlined Button</span>,
  variant: "outlined",
  darkMode: true,
};

SocraftIconButton.args = {
  children: <IconHome />,
  variant: "socraft-icon",
  size: "icon",
  darkMode: true,
};

WithStartIcon.args = {
  children: <span>Button with Start Icon</span>,
  variant: "outlined",
  startIcon: <IconHome />,
  darkMode: true,
};

WithEndIcon.args = {
  children: <span>Button with End Icon</span>,
  variant: "yellow",
  endIcon: <IconArrowRight />,
  darkMode: true,
};

LoadingButton.args = {
  children: <span>Loading Button</span>,
  variant: "yellow",
  loading: true,
};

LoadingButtonWithText.args = {
  children: <span>Send Newsletter</span>,
  variant: "yellow",
  loading: true,
  loadingText: "Sending...",
};

DefaultButton.args = {
  children: <span>Default Button</span>,
  variant: "default",
  darkMode: true,
};

DestructiveButton.args = {
  children: <span>Destructive Button</span>,
  variant: "destructive",
  darkMode: true,
};

OutlineButton.args = {
  children: <span>Outline Button</span>,
  variant: "outline",
  darkMode: true,
};

SecondaryButton.args = {
  children: <span>Secondary Button</span>,
  variant: "secondary",
  darkMode: true,
};

GhostButton.args = {
  children: <span>Ghost Button</span>,
  variant: "ghost",
  darkMode: true,
};

LinkButton.args = {
  children: <span>Link Button</span>,
  variant: "link",
  darkMode: true,
};

SmallButton.args = {
  children: <span>Small Button</span>,
  variant: "yellow",
  size: "sm",
  darkMode: true,
};

LargeButton.args = {
  children: <span>Large Button</span>,
  variant: "yellow",
  size: "lg",
  darkMode: true,
};

IconButton.args = {
  children: <IconHome />,
  variant: "outline",
  size: "icon",
  darkMode: true,
};
