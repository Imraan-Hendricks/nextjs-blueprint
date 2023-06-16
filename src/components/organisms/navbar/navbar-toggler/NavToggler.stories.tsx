import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { NavbarToggler } from './NavbarToggler';

const meta: Meta<typeof NavbarToggler> = {
  title: 'Design-System/Components/Organisms/Navbar/NavbarToggler',
  component: NavbarToggler,
  args: { onClick: action('clicked') },
};

export default meta;

type Story = StoryObj<typeof NavbarToggler>;

export const NotOpen: Story = { args: { isOpen: false } };

export const IsOpen: Story = { args: { isOpen: true } };
