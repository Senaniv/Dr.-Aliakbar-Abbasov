'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Ana Səhifə', href: '#home' },
  { label: 'Haqqında', href: '#haqqinda' },
  { label: 'Xidmətlər', href: '#xidmetler' },
  { label: 'Kampaniyalar', href: '#kampaniyalar' },
  { label: 'Qalereya', href: '#qalereya' },
  { label: 'Əlaqə', href: '#elaqe' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'glassmorphism shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-primary text-white p-2 rounded-lg">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight text-primary sm:text-xl">
                Dr. Aliakbar Abbasov
              </span>
              <span className="text-[10px] uppercase tracking-wider text-text-gray font-semibold">
                Stomatoloq-Ortoped
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-dark font-medium hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+994506616232"
              className="flex items-center gap-2 text-primary font-semibold hover:text-primary-hover transition-colors px-3 py-2"
            >
              <Phone className="w-4 h-4" />
              <span>+994 50 661 62 32</span>
            </a>
            <a
              href="#elaqe"
              className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-semibold hover:bg-primary-hover transition-all duration-300 hover:shadow-lg shadow-primary/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Randevu Al</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-dark hover:text-primary hover:bg-slate-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Əsas menyunu açın</span>
              {isOpen ? <X className="h-6 h-6" /> : <Menu className="h-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 sm:px-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-semibold text-text-dark hover:bg-secondary hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a
              href="tel:+994506616232"
              className="flex items-center justify-center gap-2 text-primary font-bold py-3 hover:bg-slate-50 rounded-md transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+994 50 661 62 32</span>
            </a>
            <a
              href="#elaqe"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-full font-bold hover:bg-primary-hover shadow-lg transition-all"
            >
              <Calendar className="w-5 h-5" />
              <span>Randevu Al</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
