import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import StatCards from "./StatCards";
import { StatCardType } from "./StatCard.type";

export default {
  title: "socraft-ui/StatCards/Light-mode",
  component: StatCards,
} as Meta<typeof StatCards>;
interface StatCardsProps {
  stats: StatCardType[];
}

const Template: StoryFn<{ stats: StatCardType[] }> = (args: any) => (
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
};
