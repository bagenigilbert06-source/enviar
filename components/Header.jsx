'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Platform', href: '#platform' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg-primary/95 backdrop-blur-sm">
      <nav className="grid-container flex items-center justify-between h-[72px]">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent-lime rounded-lg flex items-center justify-center">
            <span className="text-bg-primary font-bold text-sm">ES</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-text-primary font-semibold text-base">Enviar Solutions</h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-text-muted hover:text-text-primary text-sm transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button className="hidden sm:block px-5 py-2 bg-accent-lime text-bg-primary font-semibold text-sm rounded hover:bg-accent-hover transition-colors">
          Request a demo
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-text-primary"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-bg-secondary px-6 py-4">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-text-muted hover:text-accent-lime text-sm transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button className="w-full px-5 py-2 bg-accent-lime text-bg-primary font-semibold text-sm rounded hover:bg-accent-hover transition-colors mt-4">
              Request a demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
