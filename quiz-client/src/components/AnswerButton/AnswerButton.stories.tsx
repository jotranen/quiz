import React from "react";
import { Meta, Story } from "@storybook/react";
import { AnswerButton, AnswerButtonProps } from "./AnswerButton";

export default {
  title: "AnswerButton",
  component: AnswerButton,
  argTypes: { onClick: { action: 'kala' } },
} as Meta;

const Template: Story<AnswerButtonProps> = args => <AnswerButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  variant: "primary",
};

export const Danger = Template.bind({});
Danger.args = {
  children: "Danger",
  variant: "danger",
  shape: "rounded",
};