'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ArrowUpRight, Menu } from 'lucide-react';
import { BrandLogo } from '@/components/brand/brand-logo';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
const links = [
  { href: '/001', label: 'GEAR' },
  { href: '/app', label: 'APP' },
  { href: '/about', label: 'OUR STORY' },
];
export function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <BrandLogo />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              className="nav-link"
              href={link.href}
              aria-current={
                path === link.href ||
                (link.href === '/001' && path.startsWith('/gear'))
                  ? 'page'
                  : undefined
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <Link href="/#notify" className="action small">
            NOTIFY ME <ArrowUpRight aria-hidden="true" />
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  className="mobile-menu-trigger"
                  aria-label="Open navigation"
                />
              }
            >
              <Menu aria-hidden="true" />
            </SheetTrigger>
            <SheetContent className="mobile-menu" side="right">
              <SheetTitle className="eyebrow lime">OVRLD / EXPLORE</SheetTitle>
              <SheetDescription className="sr-only">
                Explore the first drop, training app, and our story.
              </SheetDescription>
              <nav aria-label="Mobile navigation">
                {links.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={path === link.href ? 'page' : undefined}
                  >
                    <span className="eyebrow muted">0{index + 1}</span>
                    {link.label}
                    <ArrowUpRight />
                  </Link>
                ))}
                <div className="mobile-products">
                  <Link onClick={() => setOpen(false)} href="/gear/wrist-wraps">
                    001.01 / Wrist Wraps
                  </Link>
                  <Link
                    onClick={() => setOpen(false)}
                    href="/gear/lifting-straps"
                  >
                    001.02 / Lifting Straps
                  </Link>
                </div>
              </nav>
              <p className="mobile-menu-tagline">OVRLD YOUR LIMIT.</p>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
