"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PlatList from "../components/PlatList";
import { loadCSV } from "../lib/loadCSV";
import { FaSearch, FaMapMarkerAlt, FaFilter } from "react-icons/fa";

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
      className={`min-h-screen flex flex-col transition-colors duration-500 ${
        darkMode ? "bg-zinc-950 text-zinc-100" : "bg-white text-zinc-900"
      }`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="flex-grow">
        {/* HEADER SECTION */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 md:pt-16 pb-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Temukan Kode Plat Nomor Di Sini
          </h1>
          <p className={`mt-3 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${
            darkMode ? "text-zinc-400" : "text-zinc-600"
          }`}>
            Temukan kode plat kendaraan berdasarkan huruf depan, huruf akhir, provinsi,
            atau wilayah secara umum, cepat, dan fleksibel.
          </p>
        </section>

        {/* SEARCH CARD SECTION */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-10">
          <div
            className={`rounded-[1.5rem] md:rounded-[2.5rem] p-5 sm:p-8 md:p-10 border transition-all duration-300 ${
              darkMode 
                ? "bg-zinc-900/50 border-zinc-800 shadow-2xl" 
                : "bg-zinc-50 border-zinc-200 shadow-sm"
            }`}
          >
            {/* GRUP 1: KODE WILAYAH */}
            <div className="mb-8 md:mb-10">
              <h2 className={`flex items-center gap-2 mb-4 text-base md:text-lg font-semibold tracking-tight ${
                darkMode ? "text-zinc-100" : "text-zinc-800"
              }`}>
                <FaFilter className="text-sky-500" /> Cari Kode Wilayah
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Huruf depan (B, D, AB)"
                    value={searchPlat}
                    onChange={(e) => setSearchPlat(e.target.value.toUpperCase())}
                    className={`w-full pl-4 pr-16 py-3.5 rounded-xl md:rounded-2xl outline-none transition-all border-2 text-sm md:text-base ${
                      darkMode
                        ? "bg-zinc-900 border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/20 focus:shadow-[0_0_20px_rgba(14,165,233,0.3)]"
                        : "bg-white border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
                    }`}
                  />
                  <div className={`absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors hidden sm:block ${
                    darkMode ? "text-zinc-600 group-focus-within:text-sky-500" : "text-zinc-400 group-focus-within:text-sky-500"
                  }`}>
                    <span className="text-[10px] font-bold uppercase tracking-widest">Depan</span>
                  </div>
                </div>

                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Huruf akhir (A, B, CD)"
                    value={searchAkhir}
                    onChange={(e) => setSearchAkhir(e.target.value.toUpperCase())}
                    className={`w-full pl-4 pr-16 py-3.5 rounded-xl md:rounded-2xl outline-none transition-all border-2 text-sm md:text-base ${
                      darkMode
                        ? "bg-zinc-900 border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/20 focus:shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                        : "bg-white border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10"
                    }`}
                  />
                  <div className={`absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors hidden sm:block ${
                    darkMode ? "text-zinc-600 group-focus-within:text-amber-500" : "text-zinc-400 group-focus-within:text-amber-500"
                  }`}>
                    <span className="text-[10px] font-bold uppercase tracking-widest">Akhir</span>
                  </div>
                </div>
              </div>
            </div>

            {/* GRUP 2: NAMA WILAYAH */}
            <div>
              <h2 className={`flex items-center gap-2 mb-4 text-base md:text-lg font-semibold tracking-tight ${
                darkMode ? "text-zinc-100" : "text-zinc-800"
              }`}>
                <FaMapMarkerAlt className="text-emerald-500" /> Cari Nama Wilayah
              </h2>
              
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Provinsi atau wilayah (Jawa Barat, Bandung)"
                  value={searchWilayah}
                  onChange={(e) => setSearchWilayah(e.target.value)}
                  className={`w-full pl-10 md:pl-12 pr-4 py-3.5 md:py-4 rounded-xl md:rounded-2xl outline-none transition-all border-2 text-sm md:text-base ${
                    darkMode
                      ? "bg-zinc-900 border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 focus:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                      : "bg-white border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                  }`}
                />
                <FaSearch className={`absolute left-3.5 md:left-5 top-1/2 -translate-y-1/2 text-sm transition-colors ${
                  darkMode ? "text-zinc-600 group-focus-within:text-emerald-500" : "text-zinc-400 group-focus-within:text-emerald-500"
                }`} />
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS SECTION */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-6 min-h-[300px]">
          <div className="flex items-center justify-between mb-8 px-2">
             <h3 className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] ${darkMode ? "text-zinc-600" : "text-zinc-400"}`}>
               Hasil Pencarian
             </h3>
             <div className="h-px flex-grow ml-4 md:ml-6 bg-zinc-200 dark:bg-zinc-800/50"></div>
          </div>
          
          <PlatList
            data={data}
            darkMode={darkMode}
            searchPlat={searchPlat}
            searchAkhir={searchAkhir}
            searchWilayah={searchWilayah}
          />
        </section>
      </main>

      {/* CONTACT FOOTER NOTE */}
      <div className={`text-center text-[10px] md:text-[11px] py-8 md:py-10 px-4 tracking-wide italic ${
        darkMode ? "text-zinc-600" : "text-zinc-400"
      }`}>
        Apabila terdapat kekeliruan data, silakan hubungi{" "}
        <a
          href="mailto:infonopolindo@gmail.com"
          className="font-bold hover:text-sky-500 transition-colors duration-300 underline underline-offset-4 decoration-zinc-700"
        >
          infonopolindo@gmail.com
        </a>
      </div>

      <Footer darkMode={darkMode} />
    </div>
  );
}