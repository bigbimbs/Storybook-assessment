import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import SignUp from "../SignUp";

export default {
  title: "SignUpScreen",
  component: SignUp,
} as Meta;

const Template: StoryFn<{}> = (args) => <SignUp {...args} />;

export const Component = Template.bind({});
Component.args = {};
