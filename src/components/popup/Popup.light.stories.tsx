import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Popup } from "./";
import { PopupProps } from "./Popup.types";

export default {
  title: "socraft-ui/Popup/Light-mode",
  component: Popup,
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
} as Meta;

const Template: StoryFn<PopupProps> = (args) => <Popup {...args} />;

export const Default = Template.bind({});
export const SmallContent = Template.bind({});
export const LargeContent = Template.bind({});

Default.args = {
  open: true,
  onOpenChange: () => {},
  children: <p>I&apos;m a popup</p>,
  title: "Simple popup",
  subTitle: "This is a simple popup",
  darkMode: false,
};

SmallContent.args = {
  open: true,
  onOpenChange: () => {},
  children: (
    <div className="space-y-4">
      <p>Petit contenu responsive</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Bouton test
      </button>
    </div>
  ),
  title: "Popup compact",
  subTitle: "Contenu minimal pour mobile",
  darkMode: false,
};

LargeContent.args = {
  open: true,
  onOpenChange: () => {},
  children: (
    <div className="space-y-4">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Action 1
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Action 2
        </button>
      </div>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>
    </div>
  ),
  title: "Popup avec beaucoup de contenu",
  subTitle: "Test de responsivité avec contenu long",
  darkMode: false,
};
