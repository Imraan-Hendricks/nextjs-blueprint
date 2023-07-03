import { Meta, StoryObj } from '@storybook/react';
import { NavBrand } from './NavBrand';

const meta: Meta<typeof NavBrand> = {
  title: 'Design-System/Components/Organisms/Navbar/NavBrand',
  component: NavBrand,
};

export default meta;

type Story = StoryObj<typeof NavBrand>;

export const Default: Story = {};
