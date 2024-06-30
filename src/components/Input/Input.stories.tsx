import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { FormInput } from "./Input";
import { View } from "react-native";

const InputMeta: Meta<typeof FormInput> = {
  title: "Input",
  component: FormInput,
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

export default InputMeta;

export const InputExample: StoryObj<typeof FormInput> = {
  args: {},
};
