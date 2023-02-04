import { Meta, Story } from '@storybook/react';

import { ProgressBar, ProgressBarProps } from './ProgressBar';

export default {
    title: 'ProgressBar',
    component: ProgressBar,
    parameters: {
        backgrounds: {
            values: [
                { name: 'red', value: '#f00' },
                { name: 'green', value: '#0f0' },
                { name: 'blue', value: '#00f' },
            ],
        },
    },
    argTypes: { progressDone: { action: 'ProgressBar done!' } }
} as Meta;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Light = Template.bind({});
Light.args = {
    children: 'light',
};

export const Dark = Template.bind({});
Dark.args = {
    theme: 'dark',
};
