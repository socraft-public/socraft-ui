import { StoryFn, Meta } from "@storybook/react";
import Carousel from "./Carousel";
import React from "react";
import { Card } from "../card";
import { Button } from "../button";
import { IconArrowRight, IconPlus } from "@tabler/icons-react";

export default {
  title: "socraft-ui/Carousel/Dark-mode",
  component: Carousel,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta<typeof Carousel>;

const Template: StoryFn<typeof Carousel> = (args) => <Carousel {...args} />;

export const DefaultCarousel = Template.bind({});
export const CarouselWithCustomElements = Template.bind({});

DefaultCarousel.args = {
  darkMode: true,
};

CarouselWithCustomElements.args = {
  useCustomElements: true,
  darkMode: true,
  customElements: [
    <Card
      key={1}
      title="A custom element"
      subTitle="A custom element's subtitle"
    >
      Hi, I&apos;m a custom element!
    </Card>,
    <Card
      key={2}
      title="Another custom element"
      subTitle="Another custom element's subtitle"
    >
      Hi, I&apos;m another custom element!
    </Card>,
    <Card
      key={3}
      title="Another custom element"
      subTitle="Another custom element's subtitle"
      buttons={
        <>
          <Button variant="outlined" darkMode endIcon={<IconPlus />}>
            I&apos;m an action
          </Button>
          <Button variant="yellow" endIcon={<IconArrowRight />}>
            I&apos;m an important action
          </Button>
        </>
      }
    >
      Hi, I&apos;m another custom element!
    </Card>,
  ],
};
