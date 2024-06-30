import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { CompetitionCard } from "./CompetitionCard";
import { View } from "react-native";

const MyCardsMeta: Meta<typeof CompetitionCard> = {
  title: "Card",
  component: CompetitionCard,
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

export default MyCardsMeta;

export const CardOne: StoryObj<typeof CompetitionCard> = {
  args: {
    title: "20th Asian Game - Achi Nagoya 2026 (Winter)",
    description: "YYYY-MM-DD ~ YYYY-MM-DD",
    date: "Pyeongchang, Gangwon-do, Korea",
  },
};

export const CardTwo: StoryObj<typeof CompetitionCard> = {
  args: {
    title: "20th Asian Game - Achi Nagoya 2026 (Winter)",
    description: "YYYY-MM-DD ~ YYYY-MM-DD",
    date: "Pyeongchang, Gangwon-do, Korea",
  },
};
