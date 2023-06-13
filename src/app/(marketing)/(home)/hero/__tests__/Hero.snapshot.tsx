import { cleanup, render } from '@testing-library/react';
import { Hero } from '../Hero';

describe('Hero Snapshot Tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('should match the snapshot', () => {
    const { container } = render(<Hero />);
    expect(container).toMatchSnapshot();
  });
});
