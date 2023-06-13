import { cleanup, render, screen } from '@testing-library/react';
import { Hero } from '../Hero';

describe('Hero Component Tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders with expected heading', () => {
    render(<Hero />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Home');
  });
});
