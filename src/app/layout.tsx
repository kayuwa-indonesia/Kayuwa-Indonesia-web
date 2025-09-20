import type {Metadata} from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Plus_Jakarta_Sans } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Kayuwa Indonesia',
  description: 'Your trusted partner for high-quality plywood solutions.',
  icons: {
    icon: 'https://firebasestorage.googleapis.com/v0/b/kayuwa-indonesia.firebasestorage.app/o/Kayuwa%20Indonesia%20logo.png?alt=media&token=789594c2-64ed-4d62-96e8-e7faa876e180',
  },
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          'relative h-full font-sans antialiased',
          jakarta.variable
        )}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
