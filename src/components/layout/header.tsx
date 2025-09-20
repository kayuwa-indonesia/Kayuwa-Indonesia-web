'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/about', label: 'Tentang' },
  { href: '/products', label: 'Produk' },
  { href: '/articles', label: 'Artikel' },
  { href: '/contact', label: 'Kontak' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const logoUrl = 'https://firebasestorage.googleapis.com/v0/b/kayuwa-indonesia.firebasestorage.app/o/Kayuwa%20Indonesia%20logo.png?alt=media&token=789594c2-64ed-4d62-96e8-e7faa876e180';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const isHome = pathname === '/';
  const headerClasses = cn(
    'sticky top-0 z-50 w-full transition-colors duration-300',
    isHome && !isScrolled
      ? 'bg-transparent'
      : 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b'
  );
  
  const navLinkClasses = cn(
    'transition-colors hover:text-primary',
     isHome && !isScrolled ? 'text-white' : 'text-muted-foreground'
  );

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 flex h-20 items-center">
        <Link href="/" className="mr-auto flex items-center space-x-2 md:mr-6">
           <Image src={logoUrl} alt="Kayuwa Indonesia Logo" width={40} height={40} className="h-10 w-10" />
          <span className={cn('font-bold text-lg inline-block font-headline', isHome && !isScrolled ? 'text-white' : 'text-foreground')}>
            Kayuwa Indonesia
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-base font-medium mx-auto">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                navLinkClasses,
                pathname === href && 'text-primary font-bold'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center ml-auto">
          <Button asChild className="hidden md:inline-flex" variant={isHome && !isScrolled ? "secondary" : "default"}>
            <Link href="/contact">
              <Phone className="mr-2 h-4 w-4" /> Hubungi Kami
            </Link>
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn('md:hidden', isHome && !isScrolled ? 'text-white hover:bg-white/10' : '')}>
                <Menu />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="flex items-center space-x-2">
                  <Image src={logoUrl} alt="Kayuwa Indonesia Logo" width={24} height={24} />
                  <span className="font-bold">Kayuwa Indonesia</span>
                </SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'flex w-full items-center py-2 text-lg font-semibold',
                      pathname === href
                        ? 'text-primary'
                        : 'text-muted-foreground'
                    )}
                  >
                    {label}
                  </Link>
                ))}
                <Button asChild className="w-full mt-4" onClick={() => setIsMobileMenuOpen(false)}>
                  <Link href="/contact"><Phone className="mr-2 h-4 w-4" /> Hubungi Kami</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
