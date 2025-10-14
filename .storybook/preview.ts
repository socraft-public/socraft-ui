import type { Preview } from "@storybook/react";
import "./base-styles.css";
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    backgrounds: {
      default: "grey",
      values: [
        {
          name: "gray",
          value: "#f2f2f2",
        },
        {
          name: "white",
          value: "#ffffff",
        },
      ],
    },
  },
};

export default preview;
