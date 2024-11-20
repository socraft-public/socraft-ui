import { StoryFn, Meta } from "@storybook/react";
import Carousel from "./Carousel";
import React from "react";

export default {
  title: "socraft-ui/Carousel",
  component: Carousel,
} as Meta<typeof Carousel>;

const Template: StoryFn<typeof Carousel> = (args) => <Carousel {...args} />;

export const CraftersCarousel = Template.bind({});

CraftersCarousel.args = {
  useCustomElements: false,
};
