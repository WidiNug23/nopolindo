"use client";
import { useState } from "react";
import { FaChevronDown, FaMapMarkerAlt, FaCar, FaTag } from "react-icons/fa";

/* LOGIKA KODE AKHIR */
const matchKodeAkhir = (input, polaCSV) => {
  if (!input) return true;
  if (!polaCSV) return false;

  const polaList = polaCSV.toUpperCase().split("/");

  return polaList.some((pola) => {
    if (pola.startsWith("*")) {
      return input.endsWith(pola.replace("*", ""));
    }
    if (pola.endsWith("*")) {
      return input.startsWith(pola.replace("*", ""));
    }
    return input === pola;
  });
};

export default function PlatList({
  data,
  darkMode,
  searchPlat,
  searchAkhir,
  searchWilayah,
}) {
  return (
    <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {Object.keys(data).length === 0 ? (
        <div className={`text-center py-20 rounded-[2rem] border-2 border-dashed transition-colors ${
          darkMode ? "border-zinc-800 text-zinc-600" : "border-zinc-200 text-zinc-400"
        }`}>
          <p className="font-bold">Memuat data kendaraan...</p>
        </div>
      ) : (
        Object.keys(data).map((groupKey) => {
          const items = data[groupKey].filter((item) => {
            const platMatch = searchPlat
              ? item.kode_plat.startsWith(searchPlat)
              : true;

            const akhirMatch = matchKodeAkhir(
              searchAkhir,
              item.kode_akhir
            );

            const wilayahMatch = searchWilayah
              ? item.provinsi
                  .toLowerCase()
                  .includes(searchWilayah.toLowerCase()) ||
                item.wilayah
                  .toLowerCase()
                  .includes(searchWilayah.toLowerCase())
              : true;

            return platMatch && akhirMatch && wilayahMatch;
          });

          if (items.length === 0) return null;

          return (
            <PlatItem
              key={groupKey}
              groupKey={groupKey}
              items={items}
              darkMode={darkMode}
            />
          );
        })
      )}
    </div>
  );
}

function PlatItem({ groupKey, items, darkMode }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`group overflow-hidden rounded-[2rem] border-2 transition-all duration-300 ${
        darkMode
          ? `border-zinc-800 ${open ? "bg-zinc-900 shadow-[0_0_30px_rgba(0,0,0,0.5)]" : "bg-zinc-900/60 hover:border-zinc-700"}`
          : `border-zinc-200 ${open ? "bg-white shadow-xl shadow-zinc-200" : "bg-white hover:border-zinc-300"}`
      }`}
    >
      {/* Header Accordion */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 md:px-8 py-5 md:py-6 flex justify-between items-center text-left outline-none"
      >
        <div className="flex items-center gap-5 md:gap-7">
          <div className={`flex items-center justify-center min-w-[56px] h-[56px] md:min-w-[64px] md:h-[64px] rounded-2xl font-black text-2xl md:text-3xl shadow-inner transition-all duration-300 ${
            open ? "scale-110 ring-4 ring-sky-500/20" : ""
          } ${
            darkMode ? "bg-zinc-800 text-white border border-zinc-700" : "bg-zinc-100 text-zinc-900 border border-zinc-200"
          }`}>
            {groupKey}
          </div>
          <div>
            <h4 className={`font-black text-lg md:text-2xl tracking-tight leading-none mb-1 ${darkMode ? "text-white" : "text-zinc-900"}`}>
              {items[0].provinsi}
            </h4>
            <p className={`text-xs md:text-sm font-bold uppercase tracking-wider ${darkMode ? "text-zinc-500" : "text-zinc-500"}`}>
              {items.length} Wilayah Terdaftar
            </p>
          </div>
        </div>
        
        <div className={`p-2.5 rounded-xl transition-all duration-500 border-2 ${
          open 
            ? "bg-sky-500 border-sky-400 text-white rotate-180 shadow-[0_0_15px_rgba(14,165,233,0.5)]" 
            : darkMode ? "bg-zinc-800 border-zinc-700 text-zinc-500" : "bg-zinc-100 border-zinc-200 text-zinc-400"
        }`}>
          <FaChevronDown className="text-sm md:text-base" />
        </div>
      </button>

      {/* Dropdown Content */}
      <div className={`grid transition-all duration-500 ease-in-out ${
        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}>
        <div className="overflow-hidden">
          <div className="px-5 md:px-8 pb-8 pt-2">
            
            {/* Judul Kolom (Desktop) - Dibuat Sangat Tebal */}
            <div className={`hidden md:grid grid-cols-4 gap-6 px-6 py-4 rounded-xl text-[12px] font-black uppercase tracking-[0.25em] mb-4 border-2 ${
              darkMode ? "bg-zinc-950 border-zinc-800 text-zinc-400" : "bg-zinc-100 border-zinc-200 text-zinc-500"
            }`}>
              <span>Kode Plat</span>
              <span>Provinsi</span>
              <span>Kode Akhir</span>
              <span>Cakupan Wilayah</span>
            </div>

            {/* List Body */}
            <div className="space-y-3 md:space-y-1">
              {items.map((item, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl md:rounded-xl p-5 md:px-6 md:py-4 text-sm transition-all border-2 md:border-transparent ${
                    darkMode
                      ? "bg-zinc-950 border-zinc-800 hover:bg-zinc-800/80 md:bg-transparent md:hover:bg-zinc-800/40"
                      : "bg-white border-zinc-100 hover:bg-zinc-50 md:bg-transparent md:hover:bg-zinc-50"
                  } md:grid md:grid-cols-4 md:gap-6 md:items-center`}
                >
                  {/* Kode Plat */}
                  <div className="flex items-center gap-3 mb-4 md:mb-0">
                    <span className={`md:hidden p-2 rounded-lg ${darkMode ? "bg-zinc-800 text-sky-400" : "bg-zinc-100 text-sky-600"}`}>
                      <FaTag size={12} />
                    </span>
                    <span className={`font-black text-xl md:text-lg tracking-tighter ${darkMode ? "text-sky-400" : "text-sky-600"}`}>
                      {item.kode_plat}
                    </span>
                  </div>

                  {/* Provinsi (Desktop Only) */}
                  <div className={`hidden md:block font-bold text-base ${darkMode ? "text-zinc-100" : "text-zinc-800"}`}>
                    {item.provinsi}
                  </div>

                  {/* Kode Akhir */}
                  <div className="mb-4 md:mb-0">
                    <p className="md:hidden text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">Kode Akhir</p>
                    <div className="flex flex-wrap gap-2">
                      {item.kode_akhir.split('/').map((ka, idx) => (
                        <span key={idx} className={`px-3 py-1 rounded-lg text-xs font-black border-2 ${
                          darkMode 
                            ? "bg-zinc-900 border-zinc-700 text-zinc-300 shadow-[0_0_10px_rgba(0,0,0,0.3)]" 
                            : "bg-white border-zinc-200 text-zinc-700 shadow-sm"
                        }`}>
                          {ka}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Wilayah */}
                  <div className="flex flex-col md:flex-row md:items-center gap-2">
                    <p className="md:hidden text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">Cakupan Wilayah</p>
                    <div className="flex items-start gap-3">
                      <span className={`font-bold leading-relaxed text-sm md:text-base ${darkMode ? "text-zinc-300" : "text-zinc-700"}`}>
                        {item.wilayah}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}