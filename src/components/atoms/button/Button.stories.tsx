import { action } from '@storybook/addon-actions';
import { Button } from './Button';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Design-System/Atoms/Button',
  component: Button,
  args: {
    children: 'Click Me',
    onClick: action('clicked'),
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Primary: Story = {
  args: { children: 'Primary', color: 'primary' },
};

export const Secondary: Story = {
  args: { children: 'Secondary', color: 'secondary' },
};
