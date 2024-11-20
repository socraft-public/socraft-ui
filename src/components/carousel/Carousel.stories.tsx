import { StoryFn, Meta } from "@storybook/react";
import Carousel from "./Carousel";
import React from "react";
import { Card } from "../card";
import { Button } from "../button";
import { IconArrowRight, IconPlus } from "@tabler/icons-react";

export default {
  title: "socraft-ui/Carousel",
  component: Carousel,
} as Meta<typeof Carousel>;

const Template: StoryFn<typeof Carousel> = (args) => <Carousel {...args} />;

export const DefaultCarousel = Template.bind({});
export const CarouselWithCustomElements = Template.bind({});

DefaultCarousel.args = {};

CarouselWithCustomElements.args = {
  useCustomElements: true,
  customElements: [
    <Card title="A custom element" subTitle="A custom element's subtitle">
      Hi, I'm a custom element!
    </Card>,
    <Card
      title="Another custom element"
      subTitle="Another custom element's subtitle"
    >
      Hi, I'm another custom element!
    </Card>,
    <Card
      title="Another custom element"
      subTitle="Another custom element's subtitle"
      buttons={
        <>
          <Button variant="outlined" endIcon={<IconPlus />}>
            I'm an action
          </Button>
          <Button variant="yellow" endIcon={<IconArrowRight />}>
            I'm an important action
          </Button>
        </>
      }
    >
      Hi, I'm another custom element!
    </Card>,
  ],
};
