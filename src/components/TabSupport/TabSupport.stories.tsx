import React from 'react';

import { Story, Meta } from '@storybook/react';

import TabSupport, { TabSupportProps } from './TabSupport';

export default {
  title: 'Layout/TabSupport',
  component: TabSupport,
} as Meta;

const Template: Story<TabSupportProps> = (args) => <TabSupport {...args} />;

export const Default = Template.bind({});
Default.args = {};
