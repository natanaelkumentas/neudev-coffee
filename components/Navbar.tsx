"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar({ navLinks, isActive }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a
            href="https://neudev.web.id"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/neudev.jpeg"
              alt="NeudevPublisher Logo"
              width={40}
              height={40}
              className="rounded-md"
              priority
            />
            <span className="text-lg font-semibold text-gray-900">
              NeudevCoffee
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`transition-colors ${
                  isActive(link.path)
                    ? "text-amber-900 font-semibold"
                    : "text-gray-700 hover:text-amber-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-amber-900"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded transition-colors ${
                  isActive(link.path)
                    ? "bg-amber-100 text-amber-900 font-semibold"
                    : "text-gray-700 hover:bg-amber-50 hover:text-amber-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
