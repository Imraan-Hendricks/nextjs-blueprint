import Link from 'next/link';
import { clsx } from 'clsx';

interface NavItemProps {
  active?: boolean;
  children: string;
  href: string;
}

export function NavItem({ active, children, href }: NavItemProps) {
  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'w-max cursor-pointer rounded px-4 py-2 transition-colors',
          'hover:bg-indigo-500 hover:text-white active:bg-indigo-400',
          active ? 'text-indigo-600' : 'text-gray-500',
        )}>
        {children}
      </Link>
    </li>
  );
}
