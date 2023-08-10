import React from 'react';

import { Story, Meta } from '@storybook/react';

import TabDetails from '../TabDetails';
import Tab, { TabProps } from './Tab';

export default {
  title: 'Layout/Tab',
  component: Tab,
} as Meta;

const Template: Story<TabProps> = (args) => <Tab {...args} />;

export const Default = Template.bind({});
Default.args = {
  headers: ['Detalhes', 'Meus pedidos', 'Suporte'],
  content: [<TabDetails />, <p>Meus pedidos</p>, <p>Suporte</p>],
};
