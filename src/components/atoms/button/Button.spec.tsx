import { Button } from './Button';
import { render, cleanup, screen } from '@testing-library/react';

describe('Button Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders with expected children', () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveTextContent('Click Me');
  });
});
