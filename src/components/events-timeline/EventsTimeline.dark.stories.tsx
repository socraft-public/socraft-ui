import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { EventsTimeline } from "./";
import { EventsTimelineProps } from "./EventsTimeline.types";
import { mockEvents } from "./mocks";

export default {
  title: "socraft-ui/EventsTimeline/Dark-mode",
  component: EventsTimeline,
  decorators: [
    (Story) => (
      <div className="dark w-full mx-auto">
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: {
      default: "dark",
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
