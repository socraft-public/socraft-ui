import { StoryFn, Meta } from "@storybook/react";
import Card from "./Card";
import React from "react";
import { Button } from "../button";
import { IconArrowRight, IconPlus } from "@tabler/icons-react";

export default {
  title: "socraft-ui/Card/Light-mode",
  component: Card,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "content"],
    },
  },
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-[600px] mx-auto px-4">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});
export const CardWithButtons = Template.bind({});
export const CardWithImage = Template.bind({});
export const ContentVariantSingle = Template.bind({});
export const ContentVariantMultiple = Template.bind({});

DefaultCard.args = {
  title: "Card title",
  subTitle: "Card subtitle",
  children: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lectus ex,
      volutpat ornare ex mattis, eleifend laoreet augue. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Maecenas volutpat viverra est non
      aliquet. Nunc suscipit varius tincidunt. In eu elit a nisl vestibulum
      facilisis. Cras nulla felis, tristique vitae pulvinar vehicula, finibus at
      eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
      per inceptos himenaeos. Nulla tempus, nisl ut ullamcorper bibendum, mauris
      arcu dignissim massa, pulvinar feugiat erat metus in dui. Pellentesque
      diam turpis, iaculis ut posuere vitae, iaculis in dolor. Morbi malesuada
      nunc ut metus bibendum, at scelerisque nulla lacinia. Ut id ligula rutrum,
      iaculis urna vitae, commodo orci. Nulla erat augue, efficitur id tempor
      eu, posuere in magna. Etiam elementum imperdiet tincidunt.
    </p>
  ),
};

CardWithButtons.args = {
  title: "Card with buttons",
  subTitle: "This card has buttons",
  children: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lectus ex,
      volutpat ornare ex mattis, eleifend laoreet augue. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Maecenas volutpat viverra est non
      aliquet. Nunc suscipit varius tincidunt. In eu elit a nisl vestibulum
      facilisis. Cras nulla felis, tristique vitae pulvinar vehicula, finibus at
      eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
      per inceptos himenaeos. Nulla tempus, nisl ut ullamcorper bibendum, mauris
      arcu dignissim massa, pulvinar feugiat erat metus in dui. Pellentesque
      diam turpis, iaculis ut posuere vitae, iaculis in dolor. Morbi malesuada
      nunc ut metus bibendum, at scelerisque nulla lacinia. Ut id ligula rutrum,
      iaculis urna vitae, commodo orci. Nulla erat augue, efficitur id tempor
      eu, posuere in magna. Etiam elementum imperdiet tincidunt.
    </p>
  ),
  buttons: (
    <>
      <Button variant="outlined" endIcon={<IconPlus />}>
        I&apos;m an action
      </Button>
      <Button variant="yellow" endIcon={<IconArrowRight />}>
        I&apos;m an important action
      </Button>
    </>
  ),
};

CardWithImage.args = {
  image:
    "https://www.gravatar.com/avatar/36a5f0dd82b6823d76ad795a0e56c01e74cb1aefb5cb13b2126c557a07087617?s=500&d=https://avatars.slack-edge.com/2023-02-01/4735569099092_250e4584903fddadc1ac_132.png",
  title: "Card with image",
  subTitle: "This card has an image",
  children: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lectus ex,
      volutpat ornare ex mattis, eleifend laoreet augue. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Maecenas volutpat viverra est non
      aliquet. Nunc suscipit varius tincidunt. In eu elit a nisl vestibulum
      facilisis. Cras nulla felis, tristique vitae pulvinar vehicula, finibus at
      eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
      per inceptos himenaeos. Nulla tempus, nisl ut ullamcorper bibendum, mauris
      arcu dignissim massa, pulvinar feugiat erat metus in dui. Pellentesque
      diam turpis, iaculis ut posuere vitae, iaculis in dolor. Morbi malesuada
      nunc ut metus bibendum, at scelerisque nulla lacinia. Ut id ligula rutrum,
      iaculis urna vitae, commodo orci. Nulla erat augue, efficitur id tempor
      eu, posuere in magna. Etiam elementum imperdiet tincidunt.
    </p>
  ),
};

ContentVariantSingle.args = {
  className: "mx-auto",
  variant: "content",
  name: "socraft",
  pitch:
    "A comprehensive platform for managing and showcasing software craftsmanship projects, connecting developers and fostering collaboration in the tech community",
  domain: "IT",
  website: "https://www.socraft.io/",
  holders: [
    {
      shortId: "farbou",
      firstname: "Farhdine",
      linkedin: "https://www.linkedin.com/in/farhdine",
      profilePicture:
        "https://www.gravatar.com/avatar/36a5f0dd82b6823d76ad795a0e56c01e74cb1aefb5cb13b2126c557a07087617?s=500&d=https://avatars.slack-edge.com/2023-02-01/4735569099092_250e4584903fddadc1ac_132.png",
      id: "16d223c7-808f-4c2e-9223-c23fedebedc1",
      job: "Entrepreneur",
      openToWork: true,
    },
  ],
};

ContentVariantMultiple.args = {
  ...ContentVariantSingle.args,
  holders: [
    ...(ContentVariantSingle.args.holders ?? []),
    {
      shortId: "romfel",
      firstname: "Romain",
      linkedin: "https://www.linkedin.com/in/rfldn/",
      profilePicture:
        "https://storage.googleapis.com/mysocraft-a456a.appspot.com/profilePictures/romain@socraft.ch",
      id: "b599e71d-f0b4-46bc-93ab-6b8c8e35f9f3",
      job: "Product Designer",
      openToWork: false,
    },
  ],
};
