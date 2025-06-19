'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  // { label: 'Projects', href: '/project' },
  { label: 'Certificates', href: '/CertificateSection' },
  { label: 'Blogs', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900 bg-opacity-90 backdrop-blur-lg shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" width={40} height={40} alt="Logo" className="rounded-full"/>
          <div className="text-white">
            <h1 className="text-xl font-bold leading-tight text-blue-500">Mr.  Aman</h1>
            <small className="text-gray-400 text-xs block -mt-0">|| अंतः अस्ति प्रारंभः ||</small>
          </div>
        </div>

        {/* Center Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white hover:text-blue-400 transition duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Sign In */}
        <div className="hidden md:flex">
          <Link
            href="/signin"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2  transition rounded-md"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="text-white w-6 h-6" /> : <Menu className="text-white w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 px-6 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-white hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/signin"
            className="block mt-2 text-blue-400 hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Sign In
          </Link>
        </div>
      )}
    </header>
  );
}
