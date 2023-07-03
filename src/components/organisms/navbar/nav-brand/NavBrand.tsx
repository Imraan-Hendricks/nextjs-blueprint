import Link from 'next/link';
import { SiBlueprint } from 'react-icons/si';

export function NavBrand() {
  return (
    <Link href='/'>
      <div className='flex items-center gap-4'>
        <SiBlueprint className='h-10 w-auto text-indigo-500' />
        <span className='text-2xl font-bold dark:text-white'>Blueprint</span>
      </div>
    </Link>
  );
}
