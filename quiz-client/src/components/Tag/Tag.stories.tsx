import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tag from './index'

export default {
     title: 'Tag title',
     component: Tag
}

export const Basic = () => (
     <Tag />
)

export const Second = () => (
     <Tag title="My second tag" />
)

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;
export const Primary = Template.bind({});