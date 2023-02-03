import { Meta, Story } from '@storybook/react';

import { ProgressBar, ProgressBarProps } from './ProgressBar';

export default {
    title: 'ProgressBar',
    component: ProgressBar,
    argTypes: { onClick: { action: 'kala' } },
} as Meta;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Percentage_10 = Template.bind({});
Percentage_10.args = {
    children: '10 percent',
};

export const Percentage_50 = Template.bind({});
Percentage_50.args = {
    children: '50 percent',
};
