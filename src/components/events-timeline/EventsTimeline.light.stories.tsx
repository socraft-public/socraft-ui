import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { EventsTimeline } from "./";
import { EventsTimelineProps } from "./EventsTimeline.types";
import { mockEvents } from "./mocks";

export default {
  title: "socraft-ui/EventsTimeline/Light-mode",
  component: EventsTimeline,
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
} as Meta;

const Template: StoryFn<EventsTimelineProps> = (args) => (
  <EventsTimeline {...args} />
);

export const Default = Template.bind({});
export const Expanded = Template.bind({});
export const WithLoadMore = Template.bind({});

Default.args = {
  events: mockEvents,
};

Expanded.args = {
  expanded: true,
  events: mockEvents,
};

WithLoadMore.args = {
  expanded: true,
  events: mockEvents,
  loadMoreFn: () => console.log("hello"),
};
