import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Splash from "../Splash";

export default {
  title: "SplashScreen",
  component: Splash,
} as Meta;

const Template: StoryFn<{}> = (args) => <Splash {...args} />;

export const Component = Template.bind({});
Component.args = {};
