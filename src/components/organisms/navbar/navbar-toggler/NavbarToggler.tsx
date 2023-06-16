import { clsx } from 'clsx';
import { HiOutlineMenuAlt1, HiX } from 'react-icons/hi';
import { IconType } from 'react-icons/lib';

interface NavbarTogglerProps {
  isOpen: boolean;
  onClick: () => void;
}

export function NavbarToggler({ isOpen, onClick }: NavbarTogglerProps) {
  return (
    <div
      role='navbar-toggler'
      className={clsx(
        'group w-max cursor-pointer rounded border p-1.5',
        'border-neutral-200 hover:bg-neutral-200 active:bg-transparent',
        'dark:border-neutral-700 dark:hover:bg-neutral-700 dark:active:bg-transparent',
      )}
      onClick={onClick}>
      {isOpen && <IconWrapper Icon={HiX} testId='close-icon' />}
      {!isOpen && <IconWrapper Icon={HiOutlineMenuAlt1} testId='menu-icon' />}
    </div>
  );
}

interface IconWrapper {
  Icon: IconType;
  testId: 'close-icon' | 'menu-icon';
}

function IconWrapper({ Icon, testId }: IconWrapper) {
  return (
    <Icon
      data-testid={testId}
      className={clsx(
        'h-6 w-auto',
        'text-neutral-500 group-hover:text-neutral-800 group-active:text-neutral-500',
        'dark:text-neutral-400 group-hover:dark:text-neutral-100 group-active:dark:text-neutral-400',
      )}
    />
  );
}
