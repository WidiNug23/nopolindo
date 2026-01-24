"use client";

import Link from "next/link";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);

  // Baca theme dari localStorage saat mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme !== null) {
      setDarkMode(savedTheme === "true");
    }
  }, [setDarkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  // Tulisan menu lebih besar
  const linkClass =
    "relative block px-3 py-2 text-base md:text-lg font-medium transition-all hover:text-amber-550 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-sky-500 after:transition-all hover:after:w-full";

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md shadow-lg border-b transition-colors duration-500 ${
        darkMode
          ? "bg-zinc-800/90 border-zinc-700 text-zinc-100"
          : "bg-white/90 border-zinc-200 text-zinc-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-grey-500 tracking-wide">
          NopolIndo
        </h1>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/" className={linkClass}>Beranda</Link>
          <Link href="/temukan-plat" className={linkClass}>Temukan Plat</Link>
          <Link href="/jenis-plat" className={linkClass}>Jenis Plat</Link>
          <Link href="/tentang" className={linkClass}>Tentang</Link>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors duration-300 ${
              darkMode ? "hover:bg-zinc-700" : "hover:bg-zinc-300"
            }`}
          >
            {darkMode ? <FaMoon size={18} /> : <FaSun size={18} />}
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-zinc-300 transition-colors duration-300"
            onClick={() => setOpen(!open)}
          >
            <FaBars size={20} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden px-6 pb-4 space-y-2 transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Link href="/" className={linkClass}>Beranda</Link>
        <Link href="/temukan-plat" className={linkClass}>Temukan Plat</Link>
        <Link href="/jenis-plat" className={linkClass}>Jenis Plat</Link>
        <Link href="/tentang" className={linkClass}>Tentang</Link>
      </div>
    </nav>
  );
}
