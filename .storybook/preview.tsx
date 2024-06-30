import { withKnobs } from "@storybook/addon-knobs";

export const decorators = [withKnobs];

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
