import { cleanup, render } from '@testing-library/react';
import { NavItem } from './NavItem';

describe('NavItem Snapshot Tests', () => {
  beforeAll(() => {
    cleanup();
  });

  afterEach(() => {
    cleanup();
  });

  test('renders correctly with active prop', () => {
    const { container } = render(
      <NavItem href='/some-link' active>
        My Link
      </NavItem>,
    );
    expect(container).toMatchSnapshot();
  });

  test('renders correctly without active prop', () => {
    const { container } = render(<NavItem href='/some-link'>My Link</NavItem>);
    expect(container).toMatchSnapshot();
  });
});
