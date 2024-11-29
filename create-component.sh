#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: $0 <NomDuComposant>"
  exit 1
fi

COMPONENT_NAME=$1
COMPONENT_DIR_NAME=$(echo "$COMPONENT_NAME" | sed -r 's/([A-Z])/-\1/g' | sed 's/^-//' | tr '[:upper:]' '[:lower:]')
COMPONENT_DIR="src/components/$COMPONENT_DIR_NAME"

mkdir -p "$COMPONENT_DIR"

cat > "$COMPONENT_DIR/$COMPONENT_NAME.types.ts" <<EOL
export interface ${COMPONENT_NAME}Props {}
EOL

cat > "$COMPONENT_DIR/$COMPONENT_NAME.tsx" <<EOL
import React, { FC } from "react";
import { ${COMPONENT_NAME}Props } from "./${COMPONENT_NAME}.types";
import "./${COMPONENT_NAME}.css";

const ${COMPONENT_NAME}: FC<${COMPONENT_NAME}Props> = ({ ...props }) => {
  return <h1>${COMPONENT_NAME}</h1>;
};

export default ${COMPONENT_NAME};
EOL

cat > "$COMPONENT_DIR/$COMPONENT_NAME.light.stories.tsx" <<EOL
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ${COMPONENT_NAME} } from "./";
import { ${COMPONENT_NAME}Props } from "./${COMPONENT_NAME}.types";

export default {
  title: "socraft-ui/${COMPONENT_NAME}/Light-mode",
  component: ${COMPONENT_NAME},
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
} as Meta;

const Template: StoryFn<${COMPONENT_NAME}Props> = (args) => <${COMPONENT_NAME} {...args} />;

export const Default = Template.bind({});

Default.args = {
  // Exemple de props par défaut :
  // exampleProp: "valeur par défaut",
};
EOL

cat > "$COMPONENT_DIR/$COMPONENT_NAME.dark.stories.tsx" <<EOL
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ${COMPONENT_NAME} } from "./";
import { ${COMPONENT_NAME}Props } from "./${COMPONENT_NAME}.types";

export default {
  title: "socraft-ui/${COMPONENT_NAME}/Dark-mode",
  component: ${COMPONENT_NAME},
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

const Template: StoryFn<${COMPONENT_NAME}Props> = (args) => <${COMPONENT_NAME} {...args} />;

export const Default = Template.bind({});

Default.args = {
  // Exemple de props par défaut :
  // exampleProp: "valeur par défaut",
};
EOL

cat > "$COMPONENT_DIR/$COMPONENT_NAME.css" <<EOL
/* Styles pour ${COMPONENT_NAME} */
EOL

cat > "$COMPONENT_DIR/index.ts" <<EOL
export { default as ${COMPONENT_NAME} } from "./${COMPONENT_NAME}";
EOL

EXPORT_LINE="export * from \"./$COMPONENT_DIR_NAME\";"
INDEX_FILE="src/components/index.ts"

if ! grep -q "$EXPORT_LINE" "$INDEX_FILE"; then
  echo "$EXPORT_LINE" >> "$INDEX_FILE"
fi

echo "$COMPONENT_NAME successfully created in $COMPONENT_DIR."
