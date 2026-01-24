"use client";
import { useState } from "react";

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
    <div className="space-y-4">
      {Object.keys(data).map((groupKey) => {
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
      })}
    </div>
  );
}

function PlatItem({ groupKey, items, darkMode }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-lg border transition ${
        darkMode
          ? "border-zinc-700 bg-zinc-800"
          : "border-zinc-300 bg-zinc-200"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-3 flex justify-between items-center font-semibold text-left"
      >
        <span>
          {groupKey} – {items[0].provinsi}
        </span>
        <span className="text-sm">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="px-4 pb-4 space-y-3">
          {/* Header Desktop */}
          <div className="hidden md:grid grid-cols-4 gap-2 text-sm font-bold border-b pb-2">
            <span>Kode Plat</span>
            <span>Provinsi</span>
            <span>Kode Akhir</span>
            <span>Wilayah</span>
          </div>

          {items.map((item, i) => (
            <div
              key={i}
              className={`rounded-md p-3 text-sm transition
                md:grid md:grid-cols-4 md:gap-2 md:p-0 md:rounded-none
                ${
                  darkMode
                    ? "bg-zinc-900 md:bg-transparent"
                    : "bg-white md:bg-transparent"
                }`}
            >
              <div>
                <span className="md:hidden font-semibold">Kode Plat: </span>
                {item.kode_plat}
              </div>
              <div>
                <span className="md:hidden font-semibold">Provinsi: </span>
                {item.provinsi}
              </div>
              <div>
                <span className="md:hidden font-semibold">Kode Akhir: </span>
                {item.kode_akhir}
              </div>
              <div>
                <span className="md:hidden font-semibold">Wilayah: </span>
                {item.wilayah}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
