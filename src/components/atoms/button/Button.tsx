import { clsx } from 'clsx';
import { HTMLAttributes, PropsWithChildren } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary';
}

export function Button({
  children,
  color = 'primary',
  ...rest
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={clsx('rounded px-5 py-2 font-medium', colorStyles[color])}
      {...rest}>
      {children}
    </button>
  );
}

const colorStyles = {
  primary: 'bg-rose-500 hover:bg-rose-600 active:bg-rose-500 text-white',
  secondary:
    'bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 active:bg-black dark:active:bg-white text-white dark:text-black',
};
