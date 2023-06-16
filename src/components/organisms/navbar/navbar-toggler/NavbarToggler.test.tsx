import { NavbarToggler } from './NavbarToggler';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';

describe('NavbarToggler', () => {
  beforeAll(() => {
    cleanup();
    jest.resetAllMocks();
  });

  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  test('renders with menu icon when isOpen is false', () => {
    const onClickMock = jest.fn();
    render(<NavbarToggler isOpen={false} onClick={onClickMock} />);

    const menuIcon = screen.getByTestId('menu-icon');
    expect(menuIcon).toBeInTheDocument();
  });

  test('renders with close icon when isOpen is true', () => {
    const onClickMock = jest.fn();
    render(<NavbarToggler isOpen={true} onClick={onClickMock} />);

    const closeIcon = screen.getByTestId('close-icon');
    expect(closeIcon).toBeInTheDocument();
  });

  test('calls onClick function when clicked', () => {
    const onClickMock = jest.fn();
    render(<NavbarToggler isOpen={false} onClick={onClickMock} />);

    const toggler = screen.getByRole('navbar-toggler');
    fireEvent.click(toggler);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
