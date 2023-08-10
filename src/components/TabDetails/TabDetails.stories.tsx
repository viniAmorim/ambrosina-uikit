import React from 'react';

import { Story, Meta } from '@storybook/react';

import TabDetails, { TabDetailsProps } from './TabDetails';

export default {
  title: 'Layout/TabDetails',
  component: TabDetails,
} as Meta;

const Template: Story<TabDetailsProps> = (args) => <TabDetails {...args} />;

export const Default = Template.bind({});
Default.args = {};
