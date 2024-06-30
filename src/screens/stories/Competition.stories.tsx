import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Competition from "../Competition";

export default {
  title: "CompetitionScreen",
  component: Competition,
  args: {
    handleOnClick: (_: string) => {},
  },
} as Meta;

const Template: StoryFn<{}> = (args) => (
  <Competition handleOnClick={(_: string) => {}} {...args} />
);

export const Component = Template.bind({});
Component.args = {};
