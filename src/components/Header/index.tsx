'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';


const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Certificates', href: '/CertificateSection' },
  { label: 'Blogs', href: 'https://blog.mraman.in/' },
  { label: 'Services', href: '/service' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [pendingLink, setPendingLink] = useState('');

  const handleLinkClick = (e, link) => {
    if (link === 'https://blog.mraman.in/') {
      e.preventDefault();
      setPendingLink(link);
      setShowPopup(true);
    }
  };

  const confirmRedirect = () => {
    setShowPopup(false);
    window.location.href = pendingLink;
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-slate-900 bg-opacity-90 backdrop-blur-lg shadow-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo + Title */}
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" width={40} height={40} alt="Logo" className="rounded-full" />
            <div className="text-white">
              <h1 className="text-xl font-bold leading-tight text-blue-500">Mr. Aman</h1>
              <small className="text-gray-400 text-xs block -mt-0">|| अंतः अस्ति प्रारंभः ||</small>
            </div>
          </div>

          {/* Center Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-white hover:text-blue-400 transition duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Resume Button (hidden on mobile) */}
          <div className="hidden md:flex">
            <Link
              href="resume.pdf"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition rounded-md"
            >
              Resume
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
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block text-white hover:text-blue-400 transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Popup Dialog */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]">
          <div className="bg-slate-800 rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
            <h2 className="text-lg font-semibold mb-4">Leaving Our Website</h2>
            <p className="mb-6">You are about to visit an external website. Continue?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={confirmRedirect}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
