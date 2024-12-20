import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import StatCard from "./StatCard";
import { StatCardProps } from "./StatCard.type";

export default {
  title: "socraft-ui/StatCard/Light-mode",
  component: StatCard,
} as Meta<typeof StatCard>;
const Template: StoryFn<StatCardProps> = (args) => <StatCard {...args} />;

export const Default = Template.bind({});
export const Loading = Template.bind({});

Default.args = {
  stat: {
    title: "Example",
    value: 100,
    link: { title: "Example", url: "http://localhost:8080" },
  },
};

Loading.args = {
  stat: {
    title: "Exemple",
    value: 100,
    link: { title: "Exemple", url: "http://localhost:8080" },
  },
  loading: true,
};
