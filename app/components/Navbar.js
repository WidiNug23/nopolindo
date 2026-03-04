"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Handle tema dari localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme !== null) {
      setDarkMode(savedTheme === "true");
    }
  }, [setDarkMode]);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
  };

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Temukan Plat", href: "/temukan-plat" },
    { name: "Jenis Plat", href: "/jenis-plat" },
    { name: "Tentang", href: "/tentang" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md shadow-lg border-b-2 transition-colors duration-500 ${
        darkMode
          ? "bg-zinc-900/90 border-zinc-800 text-zinc-100"
          : "bg-white/90 border-zinc-200 text-zinc-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo - Tetap Bold tanpa tambahan ikon */}
        <Link href="/">
          <h1 className="text-2xl md:text-3xl font-black tracking-tighter uppercase italic">
            NopolIndo
          </h1>
        </Link>

        {/* Desktop Menu - Menggunakan Animasi Garis */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 text-sm font-black uppercase tracking-widest transition-all duration-300 group ${
                  isActive 
                    ? (darkMode ? "text-white" : "text-zinc-900") 
                    : "text-zinc-500 hover:text-zinc-400"
                }`}
              >
                {link.name}
                {/* Animasi Garis Bawah */}
                <span 
                  className={`absolute left-0 -bottom-1 h-0.5 bg-current transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-xl border-2 transition-all duration-300 ${
              darkMode 
                ? "border-zinc-800 bg-zinc-800 text-amber-400 hover:border-zinc-700" 
                : "border-zinc-200 bg-zinc-100 text-zinc-600 hover:border-zinc-300"
            }`}
          >
            {darkMode ? <FaMoon size={18} /> : <FaSun size={18} />}
          </button>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2.5 rounded-xl border-2 transition-all ${
              darkMode ? "border-zinc-800 bg-zinc-800" : "border-zinc-200 bg-zinc-100"
            }`}
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Struktur asli yang Anda sukai */}
      <div
        className={`md:hidden px-6 transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 pt-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-lg font-black uppercase tracking-tighter transition-all ${
                  isActive 
                    ? (darkMode ? "text-white" : "text-zinc-900") 
                    : "text-zinc-500"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}