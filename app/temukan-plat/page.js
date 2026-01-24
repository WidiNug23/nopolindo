"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PlatList from "../components/PlatList";
import { loadCSV } from "../lib/loadCSV";

export default function TemukanPlat() {
  const [data, setData] = useState({});
  const [darkMode, setDarkMode] = useState(false);

  const [searchPlat, setSearchPlat] = useState("");
  const [searchAkhir, setSearchAkhir] = useState("");
  const [searchWilayah, setSearchWilayah] = useState("");

  useEffect(() => {
    loadCSV().then(setData);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col justify-between ${
        darkMode ? "bg-zinc-900 text-zinc-100" : "bg-zinc-100 text-zinc-900"
      }`}
    >
      <div>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Title Page */}
        <div className="max-w-5xl mx-auto px-6 pt-10 text-center">
          <h1
            className={`text-2xl md:text-3xl font-bold tracking-tight ${
              darkMode ? "text-zinc-100" : "text-zinc-900"
            }`}
          >
            Temukan Kode Plat Nomor Di Sini
          </h1>

          <p
            className={`mt-3 text-sm md:text-base max-w-2xl mx-auto ${
              darkMode ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Temukan kode plat kendaraan berdasarkan huruf depan, huruf akhir, provinsi,
            atau wilayah secara umum, cepat, dan fleksibel.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-5xl mx-auto px-6 pt-6">
          <div
            className={`rounded-xl p-5 border transition ${
              darkMode ? "bg-zinc-800 border-zinc-700" : "bg-white border-zinc-200"
            }`}
          >
            {/* ===== Cari Kode Wilayah ===== */}
            <h2
              className={`mb-3 text-lg font-semibold ${
                darkMode ? "text-zinc-100" : "text-zinc-800"
              }`}
            >
              Cari Kode Wilayah
            </h2>

            <div className="grid gap-3 md:grid-cols-2 mb-5">
              <input
                type="text"
                placeholder="Kode huruf depan (contoh: B, D, AB)"
                value={searchPlat}
                onChange={(e) => setSearchPlat(e.target.value.toUpperCase())}
                className={`px-3 py-2 rounded-lg outline-none transition
                  ${
                    darkMode
                      ? "bg-zinc-900 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:border-sky-500"
                      : "bg-zinc-50 border border-zinc-300 text-zinc-900 placeholder-zinc-500 focus:border-sky-500"
                  }
                `}
              />

              <input
                type="text"
                placeholder="Kode huruf akhir (contoh: A, B, CD)"
                value={searchAkhir}
                onChange={(e) => setSearchAkhir(e.target.value.toUpperCase())}
                className={`px-3 py-2 rounded-lg outline-none transition
                  ${
                    darkMode
                      ? "bg-zinc-900 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:border-amber-400"
                      : "bg-zinc-50 border border-zinc-300 text-zinc-900 placeholder-zinc-500 focus:border-amber-400"
                  }
                `}
              />
            </div>

            {/* ===== Cari Nama Wilayah ===== */}
            <h2
              className={`mb-3 text-lg font-semibold ${
                darkMode ? "text-zinc-100" : "text-zinc-800"
              }`}
            >
              Cari Nama Wilayah
            </h2>

            <input
              type="text"
              placeholder="Cari berdasarkan provinsi atau wilayah (contoh: Jawa Barat, Bandung)"
              value={searchWilayah}
              onChange={(e) => setSearchWilayah(e.target.value)}
              className={`w-full px-3 py-2 rounded-lg outline-none transition
                ${
                  darkMode
                    ? "bg-zinc-900 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:border-emerald-400"
                    : "bg-zinc-50 border border-zinc-300 text-zinc-900 placeholder-zinc-500 focus:border-emerald-400"
                }
              `}
            />
          </div>
        </div>

        {/* List */}
        <main className="max-w-5xl mx-auto px-6 py-6">
          <PlatList
            data={data}
            darkMode={darkMode}
            searchPlat={searchPlat}
            searchAkhir={searchAkhir}
            searchWilayah={searchWilayah}
          />
        </main>
      </div>

{/* Catatan kecil bawah */}
<div className="text-center text-xs text-zinc-500 py-2 px-4 italic">
  Apabila terdapat kekeliruan, silakan hubungi{" "}
  <a
    href="mailto:infonopolindo@gmail.com"
    className="hover:text-sky-500 transition-colors duration-300"
  >
    infonopolindo@gmail.com
  </a>
</div>

            {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
}
