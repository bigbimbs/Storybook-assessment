import React from "react";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { View } from "react-native";

const MyButtonMeta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    children: "Hello world",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyButtonMeta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    children: "Another example",
  },
};

export const Outlined: StoryObj<typeof Button> = {
  args: {
    children: "Another example",
    variant: "outlined",
  },
};

export const Text: StoryObj<typeof Button> = {
  args: {
    children: "Another example",
    variant: "text",
  },
};
