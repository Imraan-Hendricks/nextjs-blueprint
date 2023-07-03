import { cleanup, render } from '@testing-library/react';
import { NavBrand } from './NavBrand';

describe('NavBrand Snapshot Tests', () => {
  beforeAll(() => {
    cleanup();
  });

  afterEach(() => {
    cleanup();
  });

  it('renders the NavBrand component correctly', () => {
    const { container } = render(<NavBrand />);
    expect(container).toMatchSnapshot();
  });
});
