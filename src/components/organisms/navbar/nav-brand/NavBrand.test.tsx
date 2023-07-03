import { cleanup, render, screen } from '@testing-library/react';
import { NavBrand } from './NavBrand';

describe('NavBrand Component Tests', () => {
  beforeAll(() => {
    cleanup();
  });

  afterEach(() => {
    cleanup();
  });

  it('renders the NavBrand component', () => {
    render(<NavBrand />);
  });

  it('navigates to the homepage when clicked', () => {
    render(<NavBrand />);
    const brandLink = screen.getByRole('link');
    expect(brandLink).toHaveAttribute('href', '/');
  });
});
