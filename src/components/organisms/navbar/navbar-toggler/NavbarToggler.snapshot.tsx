import { cleanup, render } from '@testing-library/react';
import { NavbarToggler } from './NavbarToggler';

describe('NavbarToggler', () => {
  beforeAll(() => {
    cleanup();
  });

  afterEach(() => {
    cleanup();
  });

  test('renders with menu icon when isOpen is false', () => {
    const { container } = render(
      <NavbarToggler isOpen={false} onClick={() => {}} />,
    );
    expect(container).toMatchSnapshot();
  });

  test('renders with close icon when isOpen is true', () => {
    const { container } = render(
      <NavbarToggler isOpen={true} onClick={() => {}} />,
    );
    expect(container).toMatchSnapshot();
  });
});
