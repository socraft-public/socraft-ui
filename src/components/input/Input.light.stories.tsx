import { StoryFn, Meta } from "@storybook/react";
import Input from "./Input";
import React from "react";
import {
  IconAt,
  IconEye,
  IconEyeOff,
  IconSearch,
  IconUser,
} from "@tabler/icons-react";

export default {
  title: "socraft-ui/Input/Light-mode",
  component: Input,
  parameters: {
    backgrounds: {
      default: "gray",
    },
  },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const DefaultInput = Template.bind({});
export const InputWithStartIcon = Template.bind({});
export const InputWithEndIcon = Template.bind({});
export const InputWithBothIcons = Template.bind({});

export const InputWithError = Template.bind({});
export const InputWithErrorAndIcon = Template.bind({});

export const PasswordInput = Template.bind({});
export const SearchInput = Template.bind({});
export const EmailInput = Template.bind({});

export const DisabledInput = Template.bind({});
export const ReadOnlyInput = Template.bind({});

DefaultInput.args = {
  placeholder: "Entrez votre texte...",
};

InputWithStartIcon.args = {
  placeholder: "Nom d'utilisateur",
  startIcon: <IconUser />,
};

InputWithEndIcon.args = {
  placeholder: "Rechercher...",
  endIcon: <IconSearch />,
};

InputWithBothIcons.args = {
  placeholder: "Adresse e-mail",
  startIcon: <IconAt />,
  endIcon: <IconEye />,
};

InputWithError.args = {
  placeholder: "Adresse e-mail",
  value: "email-invalide",
  errorMessage: "L'adresse e-mail est invalide",
};

InputWithErrorAndIcon.args = {
  placeholder: "Adresse e-mail",
  startIcon: <IconAt />,
  value: "email-invalide",
  errorMessage: "Format d'email incorrect",
};

PasswordInput.args = {
  type: "password",
  placeholder: "Mot de passe",
  startIcon: <IconEyeOff />,
};

SearchInput.args = {
  type: "search",
  placeholder: "Rechercher des articles...",
  startIcon: <IconSearch />,
};

EmailInput.args = {
  type: "email",
  placeholder: "votre@email.com",
  startIcon: <IconAt />,
};

DisabledInput.args = {
  placeholder: "Champ désactivé",
  startIcon: <IconUser />,
  disabled: true,
  value: "Valeur désactivée",
};

ReadOnlyInput.args = {
  placeholder: "Champ en lecture seule",
  startIcon: <IconUser />,
  readOnly: true,
  value: "Valeur en lecture seule",
};
