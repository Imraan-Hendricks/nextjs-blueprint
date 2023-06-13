import './globals.css';
import { PropsWithChildren } from 'react';

export const metadata = {
  authors: { name: 'Imraan-Hendricks', url: 'https://www.imraanhendricks.com' },
  title: 'Next.js Blueprint',
  description:
    'Next.js Blueprint is a foundational project template for rapidly developing web applications using Next.js and TypeScript.',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
