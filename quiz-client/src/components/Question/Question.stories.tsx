import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Question from './index'

export default {
     title: 'Tag title',
     component: Question
}

export const Basic = () => (
     <Question />
)

export const Second = () => (
     <Question title="My second tag" />
)

const Template: ComponentStory<typeof Question> = (args) => <Question {...args} />;
export const Primary = Template.bind({});