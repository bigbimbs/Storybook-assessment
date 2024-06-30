import { StorybookConfig } from "@storybook/react-native";

const main: StorybookConfig = {
  stories: [
    "./stories/**/*.stories.?(ts|tsx|js|jsx)",
    "../src/**/*.stories.?(ts|tsx)",
    "../src/**/**/*.stories.?(ts|tsx)",
  ],
  addons: [
    "@storybook/addon-ondevice-controls",
    "@storybook/addon-ondevice-actions",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs",
    "@storybook/addon-essentials",
  ],
};

export default main;
