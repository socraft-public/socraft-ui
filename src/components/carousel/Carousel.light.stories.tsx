import { StoryFn, Meta } from "@storybook/react";
import Carousel from "./Carousel";
import React from "react";
import { Card } from "../card";
import { Button } from "../button";
import { IconArrowRight, IconPlus } from "@tabler/icons-react";
import icon from "../../assets/logo-dark.svg";

export default {
  title: "socraft-ui/Carousel/Light-mode",
  component: Carousel,
} as Meta<typeof Carousel>;

const Template: StoryFn<typeof Carousel> = (args) => <Carousel {...args} />;

export const DefaultCarousel = Template.bind({});
export const CarouselWithCustomElements = Template.bind({});
export const CarouselWithImages = Template.bind({});

DefaultCarousel.args = {
  crafters: [
    {
      id: "1",
      firstname: "Jane",
      profilePicture: "https://placehold.co/100x100.png",
    },
    {
      id: "2",
      firstname: "Doe",
      profilePicture: "https://placehold.co/100x100.png",
    },
    {
      id: "3",
      firstname: "John",
      profilePicture: "https://placehold.co/100x100.png",
    },
    {
      id: "4",
      firstname: "Alice",
      profilePicture: "https://placehold.co/100x100.png",
    },
    {
      id: "5",
      firstname: "Bob",
      profilePicture: "https://placehold.co/100x100.png",
    },
  ],
};

CarouselWithCustomElements.args = {
  useCustomElements: true,

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
          <Button variant="outlined" endIcon={<IconPlus />}>
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

CarouselWithImages.args = {
  useCustomElements: true,
  numVisible: 5,
  customElements: [
    <img key={1} className="logo" src={icon} alt="Placeholder image" />,
    <img key={2} className="logo" src={icon} alt="Placeholder image" />,
    <img key={3} className="logo" src={icon} alt="Placeholder image" />,
    <img key={4} className="logo" src={icon} alt="Placeholder image" />,
    <img key={5} className="logo" src={icon} alt="Placeholder image" />,
    <img key={6} className="logo" src={icon} alt="Placeholder image" />,
  ],
};
