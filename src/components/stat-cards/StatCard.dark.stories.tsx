import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import StatCards from "./StatCards";
import { StatCardType } from "./StatCard.type";

export default {
  title: "socraft-ui/StatCards/Dark-mode",
  component: StatCards,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta<typeof StatCards>;

interface StatCardsProps {
  stats: StatCardType[];
  darkMode?: boolean;
}

const Template: StoryFn<{ stats: StatCardType[] }> = (args) => (
  <StatCards {...args} />
);

export const Default = Template.bind({});
Default.args = {
  stats: [
    {
      title: "Exemple",
      value: 100,
      link: { title: "Exemple", url: "http://localhost:8080" },
    },
  ],
  darkMode: true,
};
