import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Button, { IProps } from '../Button/Button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<IProps> = (args) => <Button {...args}>Botão</Button>;

export const Inicial = Template.bind({});

Inicial.args = {
  color: '#fff',
  background: 'purple'
};
