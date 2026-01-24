"use client";

export default function Footer({ darkMode }) {
  return (
    <footer
      className={`mt-12 border-t transition-colors duration-500 ${
        darkMode
          ? "bg-zinc-900 border-zinc-800 text-zinc-400"
          : "bg-zinc-100 border-zinc-200 text-zinc-600"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center md:justify-between gap-4">
        {/* Copyright */}
        <p className="text-center md:text-left text-sm md:text-base">
          © {new Date().getFullYear()} <span className="font-semibold">NopolIndo</span>
        </p>

        {/* Email */}
        <a
          href="mailto:infonopolindo@gmail.com"
          className={`text-sm md:text-base font-medium transition-colors duration-300 hover:text-sky-500`}
        >
          infonopolindo@gmail.com
        </a>
      </div>
    </footer>
  );
}
