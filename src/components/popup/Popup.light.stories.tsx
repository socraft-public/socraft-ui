import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Popup } from "./";
import { PopupProps } from "./Popup.types";

export default {
  title: "socraft-ui/Popup/Light-mode",
  component: Popup,
  parameters: {
    backgrounds: {
      default: "gray",
    },
  },
} as Meta;

const Template: StoryFn<PopupProps> = (args) => <Popup {...args} />;

export const Default = Template.bind({});
export const SmallContent = Template.bind({});
export const LargeContent = Template.bind({});
export const WithLongTitle = Template.bind({});
export const CustomWidth = Template.bind({});
export const MobileTest = Template.bind({});

Default.args = {
  open: true,
  onOpenChange: () => {},
  children: <p>I&apos;m a popup</p>,
  title: "Simple popup",
  subTitle: "This is a simple popup",
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
};

WithLongTitle.args = {
  open: true,
  onOpenChange: () => {},
  children: <p>Contenu avec un titre très long pour tester la responsivité</p>,
  title:
    "Titre très long qui devrait s'adapter sur mobile et ne pas déborder du conteneur",
  subTitle:
    "Sous-titre également assez long pour vérifier le comportement responsive",
};

CustomWidth.args = {
  open: true,
  onOpenChange: () => {},
  children: (
    <div className="space-y-4">
      <p>Popup avec largeur personnalisée</p>
      <div className="bg-gray-100 p-4 rounded">
        <p>Contenu avec largeur fixe</p>
      </div>
    </div>
  ),
  title: "Popup largeur custom",
  subTitle: "600px de large sur desktop",
  width: "600px",
};

MobileTest.args = {
  open: true,
  onOpenChange: () => {},
  children: (
    <div className="space-y-4 text-center">
      <div className="bg-blue-100 p-4 rounded-lg">
        <h3 className="font-semibold text-lg mb-2">
          Test Border Radius Mobile
        </h3>
        <p className="text-sm">
          Ce popup devrait avoir des coins arrondis même sur mobile grâce à
          rounded-xl.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <button className="bg-green-500 text-white px-3 py-2 rounded text-sm">
          OK
        </button>
        <button className="bg-gray-500 text-white px-3 py-2 rounded text-sm">
          Annuler
        </button>
      </div>
      <p className="text-xs text-gray-600">
        Testez sur mobile pour vérifier le border-radius
      </p>
    </div>
  ),
  title: "Test Mobile Responsivité",
  subTitle: "Vérification du border-radius sur petits écrans",
};
