export default function Footer({ darkMode }) {
  return (
    <footer
      className={`mt-12 border-t transition ${
        darkMode
          ? "bg-zinc-900 border-zinc-800 text-zinc-400"
          : "bg-zinc-100 border-zinc-200 text-zinc-600"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-6 text-sm flex flex-col md:flex-row gap-4 md:justify-between">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} NopolIndo
        </p>

        <div className="flex justify-center md:justify-end gap-4">
          <span className="hover:opacity-80 cursor-pointer">Referensi</span>
          <span className="hover:opacity-80 cursor-pointer">GitHub</span>
        </div>
      </div>
    </footer>
  );
}
