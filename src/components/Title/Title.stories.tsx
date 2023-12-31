import React from 'react';

import { Story, Meta } from '@storybook/react';
import { Mail } from 'tabler-icons-react';

import Title, { TitleProps } from './Title';

export default {
  title: 'Atoms/Typography/Title',
  component: Title,
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Ad astra per aspera',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: 'Endereço padrão de entrega',
  leftIcon: <Mail />,
};
