import React from 'react';
import { Story } from '@storybook/react';

import { ResultCard, ResultCardProps } from './ResultCard';

export default {
    title: 'ResultCard',
    component: ResultCard,
    // decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
};

const Template: Story<ResultCardProps> = (args) => <ResultCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary',
    title: 'primary',
    Result:
        'mita kello? fdafasdfadf asfasdfas hfsadhfkja sdhfkasdhfkashfkja hfhdahkfdsah',
    answers: ['kello', 'kello2', 'kello3'],
};
