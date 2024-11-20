import { StoryFn, Meta } from "@storybook/react";
import Card from "./Card";
import React from "react";
import { Button } from "../button";
import { IconArrowRight, IconPlus } from "@tabler/icons-react";

export default {
  title: "socraft-ui/Card",
  component: Card,
  decorators: [
    (Story) => (
      <div style={{ width: "50%", margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});
export const CardWithButtons = Template.bind({});

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
        I'm an action
      </Button>
      <Button variant="yellow" endIcon={<IconArrowRight />}>
        I'm an important action
      </Button>
    </>
  ),
};
