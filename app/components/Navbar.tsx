"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex-1 flex items-center">
          <span className="text-xl font-bold text-blue-700">Academy</span>
        </Link>

        {/* Links - desktop */}
        <ul className="hidden md:flex flex-1 justify-center gap-8 text-gray-700 font-medium">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Contact us", href: "/contact" },
          ].map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`relative text-black font-semibold transition-transform duration-300 ease-in-out hover:scale-120 hover:text-blue-600`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA and hamburger */}
        <div className="flex-1 flex justify-end items-center">
          {/* Hamburger (mobile) */}
          <button
            className="flex items-center justify-center p-2 rounded lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* CTA button */}
          <Link
            href="/contact"
            className="hidden lg:block ml-4 px-5 py-2 bg-black text-white rounded-full font-semibold shadow transition-transform duration-300 hover:scale-105 hover:bg-gray-900"
          >
            Enroll Now
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-black text-2xl focus:outline-none"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>
        <ul className="flex flex-col gap-8 text-gray-800 font-semibold text-lg mt-20 px-8">
          {[
            { name: "Home", href: "/" },

            { name: "About", href: "/about" },
            { name: "Contact us", href: "/contact" },
          ].map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="transition-transform duration-300 ease-in-out hover:scale-105 hover:text-blue-600"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-white/60 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
