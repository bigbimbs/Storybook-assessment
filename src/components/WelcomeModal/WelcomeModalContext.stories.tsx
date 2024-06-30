import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { WelcomeModal } from "./WelcomeModalContent";
import { View } from "react-native";

const WelcomeModalContentMeta: Meta<typeof WelcomeModal> = {
  title: "Input",
  component: WelcomeModal,
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default WelcomeModalContentMeta;

export const WelcomeModalContentExample: StoryObj<typeof WelcomeModal> = {
  args: {},
};
