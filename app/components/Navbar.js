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

  // Simpan theme saat berubah
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  const linkClass =
    "block px-3 py-2 rounded-md text-sm font-medium transition hover:opacity-80";

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur border-b ${
        darkMode
          ? "bg-zinc-800/90 border-zinc-700"
          : "bg-zinc-200/90 border-zinc-300"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">NopolIndo</h1>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-2">
          <Link href="/" className={linkClass}>Beranda</Link>
          <Link href="/temukan-plat" className={linkClass}>Temukan Plat</Link>
          <Link href="/jenis-plat" className={linkClass}>Jenis Plat</Link>
          <Link href="/sumber" className={linkClass}>Sumber</Link>
        </div>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition ${
              darkMode ? "hover:bg-zinc-700" : "hover:bg-zinc-400"
            }`}
          >
            {darkMode ? <FaMoon size={18} /> : <FaSun size={18} />}
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-1">
          <Link href="/" className={linkClass}>Beranda</Link>
          <Link href="/temukan-plat" className={linkClass}>Temukan Plat</Link>
          <Link href="/jenis-plat" className={linkClass}>Jenis Plat</Link>
          <Link href="/custom-plat" className={linkClass}>Custom Plat</Link>
          <Link href="/sumber" className={linkClass}>Sumber</Link>
        </div>
      )}
    </nav>
  );
}
