"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { NavItem } from '@/types/common';

interface NavbarProps {
  logo: React.ReactNode;
  navItems: NavItem[];
  ctaText?: string;
  ctaHref?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  logo,
  navItems,
  ctaText,
  ctaHref,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/" className="relative z-10">
            {logo}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className={cn(
                  'text-text-primary hover:text-accent-main transition-colors',
                  pathname === item.href && 'text-accent-main font-medium'
                )}
              >
                {item.label}
              </Link>
            ))}
            {ctaText && ctaHref && (
              <Button 
                variant="primary" 
                size="md"
                className="ml-4"
                onClick={() => window.location.href = ctaHref}
              >
                {ctaText}
              </Button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1">
              <span className={cn(
                "block h-0.5 w-full bg-primary-main transition-all duration-300",
                isMobileMenuOpen && "rotate-45 translate-y-1.5"
              )} />
              <span className={cn(
                "block h-0.5 w-full bg-primary-main transition-all duration-300",
                isMobileMenuOpen && "opacity-0"
              )} />
              <span className={cn(
                "block h-0.5 w-full bg-primary-main transition-all duration-300",
                isMobileMenuOpen && "-rotate-45 -translate-y-1.5"
              )} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-text-primary hover:text-accent-main transition-colors py-2',
                    pathname === item.href && 'text-accent-main font-medium'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {ctaText && ctaHref && (
                <Button 
                  variant="primary" 
                  size="md"
                  className="mt-2"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.location.href = ctaHref;
                  }}
                >
                  {ctaText}
                </Button>
              )}
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
};
