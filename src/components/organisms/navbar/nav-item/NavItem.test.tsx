import userEvent from '@testing-library/user-event';
import { cleanup, render, screen } from '@testing-library/react';
import { NavItem } from './NavItem';

describe('NavItem Component Tests', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders the link with children', () => {
    render(
      <NavItem href='/some-link' active>
        My Link
      </NavItem>,
    );

    const linkElement = screen.getByText('My Link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute('href')).toBe('/some-link');
  });

  test('applies active class when active prop is true', () => {
    render(
      <NavItem href='/some-link' active>
        My Link
      </NavItem>,
    );

    const listItem = screen.getByText('My Link').parentElement;
    expect(listItem).toHaveClass('text-indigo-600');
  });

  test('applies hover styles on mouseover', () => {
    render(<NavItem href='/some-link'>My Link</NavItem>);

    const listItem = screen.getByText('My Link').parentElement;
    userEvent.hover(listItem!);
    expect(listItem).toHaveClass('hover:bg-indigo-500');
    expect(listItem).toHaveClass('hover:text-white');
  });

  test('applies active styles on click', () => {
    render(<NavItem href='/some-link'>My Link</NavItem>);

    const listItem = screen.getByText('My Link').parentElement;
    userEvent.click(listItem!);
    expect(listItem).toHaveClass('active:bg-indigo-400');
  });
});
