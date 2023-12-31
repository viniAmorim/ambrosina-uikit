import React from 'react';

import { Story, Meta } from '@storybook/react';

import Checkbox from './Checkbox';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {};
