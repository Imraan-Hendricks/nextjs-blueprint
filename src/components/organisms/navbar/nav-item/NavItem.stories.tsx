import { Meta, StoryObj } from '@storybook/react';
import { NavItem } from './NavItem';

const meta: Meta<typeof NavItem> = {
  title: 'Design-System/Components/Organisms/Navbar/NavItem',
  args: { children: 'NavItem', href: '#' },
  render: props => {
    return (
      <ul>
        <NavItem {...props} />
      </ul>
    );
  },
};

export default meta;

type Story = StoryObj<typeof NavItem>;

export const Default: Story = {};

export const Active: Story = {
  args: { active: true, children: 'ActiveItem' },
};
