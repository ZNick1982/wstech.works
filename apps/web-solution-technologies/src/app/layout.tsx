import type { Metadata } from 'next';
import { Providers } from './providers';
import Footer from '@/components/footer';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
