import userEvent from '@testing-library/user-event';
import { cleanup, render, screen } from '@testing-library/react';
import { NavItem } from './NavItem';

describe('NavItem Component Tests', () => {
  beforeAll(() => {
    cleanup();
  });

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

    const linkElement = screen.getByText('My Link');
    expect(linkElement).toHaveClass('text-indigo-600');
  });

  test('applies hover styles on mouseover', () => {
    render(<NavItem href='/some-link'>My Link</NavItem>);

    const linkElement = screen.getByText('My Link');
    userEvent.hover(linkElement!);
    expect(linkElement).toHaveClass('hover:bg-indigo-500');
    expect(linkElement).toHaveClass('hover:text-white');
  });

  test('applies active styles on click', () => {
    render(<NavItem href='/some-link'>My Link</NavItem>);

    const linkElement = screen.getByText('My Link');
    userEvent.click(linkElement!);
    expect(linkElement).toHaveClass('active:bg-indigo-400');
  });
});
