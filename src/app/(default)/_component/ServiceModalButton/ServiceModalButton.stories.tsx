import type { Meta, StoryObj } from '@storybook/react';
import ServiceModalButton from './index';
import { NextUIProvider } from '@nextui-org/react';

const meta: Meta<typeof ServiceModalButton> = {
  title: 'ServiceModalButton',
  component: ServiceModalButton,
}

export default meta;

type Story = StoryObj<typeof ServiceModalButton>;

export const Default: Story = {
  args: {
    serviceName: "Button",
    isDisabled: true,
    isBadge: true,
    title: 'Button',
    content: 'Button',
    url: 'Button',
  },
};