import React from "react";
import { Story } from "@storybook/react";

import { QuestionCard, QuestionCardProps } from './QuestionCard';

export default {
    title: 'QuestionCard',
    component: QuestionCard,
    // decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
};

const Template: Story<QuestionCardProps> = args => <QuestionCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  title: "primary",
  question: "mita kello? fdafasdfadf asfasdfas hfsadhfkja sdhfkasdhfkashfkja hfhdahkfdsah",
  answers: ["kello", "kello2", "kello3"]
};
