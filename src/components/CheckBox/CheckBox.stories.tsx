import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./CheckBox";
import { View } from "react-native";

const CheckBoxMeta: Meta<typeof Checkbox> = {
  title: "Input",
  component: Checkbox,
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

export default CheckBoxMeta;

export const CheckBoxExample: StoryObj<typeof Checkbox> = {
  args: {},
};
