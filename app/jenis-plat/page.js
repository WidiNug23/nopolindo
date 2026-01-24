"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function JenisPlat() {
  const [darkMode, setDarkMode] = useState(false);

  const platList = [
    {
      title: "Warna Putih dengan Tulisan Hitam",
      image: "/image/1.png",
      desc: "Digunakan untuk kendaraan pribadi atau kendaraan sewa.",
    },
    {
      title: "Warna Merah dengan Tulisan Putih",
      image: "/image/4.png",
      desc: "Digunakan untuk kendaraan dinas milik pemerintah.",
    },
    {
      title: "Warna Hijau dengan Tulisan Hitam",
      image: "/image/6.png",
      desc:
        "Digunakan di wilayah perdagangan bebas. Kendaraan dengan plat ini tidak dapat dimutasikan atau digunakan di wilayah lain di Indonesia.",
    },
    {
      title: "Warna Kuning dengan Tulisan Hitam",
      image: "/image/5.png",
      desc: "Digunakan untuk kendaraan umum seperti angkot, taksi, dan bus.",
    },
    {
      title: "Warna Dasar Putih dengan Garis Hitam",
      image: "/image/3.png",
      desc: "Digunakan untuk kendaraan Korps Diplomatik negara asing.",
    },
        {
      title: "Penambahan Garis Biru",
      image: "/image/2.png",
      desc: "Digunakan untuk kendaraan listrik.",
    },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col transition ${
        darkMode ? "bg-zinc-900 text-zinc-100" : "bg-zinc-100 text-zinc-900"
      }`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-14">
        {/* JUDUL */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Ragam Plat Nomor Indonesia
        </h1>

{/* SECTION TITLE */}
<h2
  className={`text-2xl font-semibold mb-12 border-l-4 pl-4 ${
    darkMode
      ? "border-sky-400 text-zinc-100"
      : "border-sky-600 text-zinc-800"
  }`}
>
  Warna Plat Nomor
</h2>

{/* LIST */}
<div className="space-y-12">
  {platList.map((item, i) => (
    <div
      key={i}
      className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-center rounded-xl p-6 transition-shadow hover:shadow-2xl ${
        darkMode
          ? "bg-zinc-800 border border-zinc-700"
          : "bg-white border border-zinc-200"
      }`}
    >
      {/* IMAGE */}
      <div className={`flex justify-center ${i % 2 !== 0 ? "md:order-2" : ""}`}>
        <Image
          src={item.image}
          alt={item.title}
          width={500}
          height={260}
          className="w-full max-w-md rounded-xl shadow-2xl object-contain"
        />
      </div>

      {/* TEXT */}
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">
          {item.title}
        </h3>
        <p className={`text-sm md:text-base leading-relaxed ${
          darkMode ? "text-zinc-400" : "text-zinc-600"
        }`}>
          {item.desc}
        </p>
      </div>
    </div>
  ))}
</div>


        {/* SECTION TITLE */}
<h2
  className={`text-2xl font-semibold mt-24 mb-10 border-l-4 pl-4 ${
    darkMode
      ? "border-sky-400 text-zinc-100"
      : "border-sky-600 text-zinc-800"
  }`}
>
  Nomor Urut Plat
</h2>

{/* TABLE */}
<div
  className={`overflow-x-auto rounded-xl border ${
    darkMode
      ? "border-zinc-700 bg-zinc-800"
      : "border-zinc-200 bg-white"
  }`}
>
  <table className="min-w-full text-sm">
    <thead
      className={`text-left ${
        darkMode ? "bg-zinc-900 text-zinc-300" : "bg-zinc-100 text-zinc-700"
      }`}
    >
      <tr>
        <th className="px-4 py-3 font-semibold">Nomor Urut</th>
        <th className="px-4 py-3 font-semibold">Kendaraan</th>
      </tr>
    </thead>

    <tbody>
      {[
        ["1 – 2999", "Kendaraan penumpang"],
        ["3000 – 6999", "Sepeda motor"],
        ["7000 – 7999", "Bus"],
        ["8000 – 8999", "Kendaraan penumpang atau barang"],
        ["9000 – 9999", "Truk atau kendaraan pengangkut beban"],
      ].map((row, i) => (
        <tr
          key={i}
          className={`border-t ${
            darkMode
              ? "border-zinc-700 hover:bg-zinc-700/40"
              : "border-zinc-200 hover:bg-zinc-50"
          }`}
        >
          <td className="px-4 py-3 font-medium">{row[0]}</td>
          <td className="px-4 py-3">{row[1]}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

{/* SECTION TITLE */}
<h2
  className={`text-2xl font-semibold mt-24 mb-10 border-l-4 pl-4 ${
    darkMode
      ? "border-sky-400 text-zinc-100"
      : "border-sky-600 text-zinc-800"
  }`}
>
  Plat Nomor Pejabat Republik Indonesia
</h2>

{/* CARD GRID */}
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {[
    { kode: "RI 1", jabatan: "Presiden Republik Indonesia" },
    { kode: "RI 2", jabatan: "Wakil Presiden Republik Indonesia" },
    { kode: "RI 3", jabatan: "Istri Presiden Republik Indonesia" },
    { kode: "RI 4", jabatan: "Istri Wakil Presiden Republik Indonesia" },
    { kode: "RI 5", jabatan: "Ketua MPR (Majelis Permusyawaratan Rakyat)" },
    { kode: "RI 6", jabatan: "Ketua DPR (Dewan Perwakilan Rakyat)" },
    { kode: "RI 7", jabatan: "Ketua DPD (Dewan Perwakilan Daerah)" },
    { kode: "RI 8", jabatan: "Ketua MA (Mahkamah Agung)" },
    { kode: "RI 9", jabatan: "Ketua MK (Mahkamah Konstitusi)" },
    { kode: "RI 10", jabatan: "Ketua BPK (Badan Pemeriksa Keuangan)" },
    { kode: "RI 11", jabatan: "Ketua KY (Komisi Yudisial)" },
    { kode: "RI 12", jabatan: "Gubernur BI (Bank Indonesia)" },
    { kode: "RI 13", jabatan: "OJK (Otoritas Jasa Keuangan)" },
    { kode: "RI 14", jabatan: "Kementerian Sekretariat Negara" },
    { kode: "RI 15", jabatan: "Menteri Koordinator Politik, Hukum, dan HAM" },
    { kode: "RI 16", jabatan: "Menteri Koordinator Perekonomian" },
    { kode: "RI 17", jabatan: "Menteri Koordinator Pembangunan Manusia dan Kebudayaan" },
    { kode: "RI 18", jabatan: "Menteri Koordinator Kemaritiman" },
    { kode: "RI 19", jabatan: "Tidak digunakan saat ini" },
    { kode: "RI 20", jabatan: "Menteri Dalam Negeri" },
    { kode: "RI 21", jabatan: "Menteri Luar Negeri" },
    { kode: "RI 22", jabatan: "Menteri Pertahanan" },
    { kode: "RI 23", jabatan: "Menteri Agama" },
    { kode: "RI 24", jabatan: "Menteri Hukum dan HAM" },
    { kode: "RI 25", jabatan: "Menteri Keuangan" },
    { kode: "RI 26", jabatan: "Menteri Pendidikan dan Kebudayaan" },
    { kode: "RI 27", jabatan: "Menteri Riset dan Teknologi" },
    { kode: "RI 28", jabatan: "Menteri Kesehatan" },
    { kode: "RI 29", jabatan: "Menteri Sosial" },
    { kode: "RI 30", jabatan: "Menteri Ketenagakerjaan" },
    { kode: "RI 31", jabatan: "Menteri Perindustrian" },
    { kode: "RI 32", jabatan: "Menteri Perdagangan" },
    { kode: "RI 33", jabatan: "Menteri ESDM" },
    { kode: "RI 34", jabatan: "Menteri PUPR" },
    { kode: "RI 35", jabatan: "Menteri Perhubungan" },
    { kode: "RI 36", jabatan: "Menteri Komunikasi dan Informatika" },
    { kode: "RI 37", jabatan: "Menteri Pertanian" },
    { kode: "RI 38", jabatan: "Menteri Lingkungan Hidup dan Kehutanan" },
    { kode: "RI 39", jabatan: "Menteri Kelautan dan Perikanan" },
    { kode: "RI 40", jabatan: "Menteri Desa dan PDT" },
    { kode: "RI 41", jabatan: "Menteri ATR / Kepala BPN" },
    { kode: "RI 42", jabatan: "Menteri PPN / Kepala Bappenas" },
  ].map((item, i) => (
    <div
      key={i}
      className={`rounded-xl p-5 border transition-all duration-300 hover:-translate-y-1 ${
        darkMode
          ? "bg-zinc-800 border-zinc-700 hover:shadow-black/30"
          : "bg-white border-zinc-200 hover:shadow-zinc-300/40"
      }`}
    >
      {/* CONTENT */}
      <div className="flex items-center gap-4">
        {/* KODE RI */}
        <div
          className={`text-2xl font-bold tracking-wide shrink-0 ${
            darkMode ? "text-sky-400" : "text-sky-600"
          }`}
        >
          {item.kode}
        </div>

        {/* JABATAN */}
        <p
          className={`text-sm leading-relaxed ${
            darkMode ? "text-zinc-300" : "text-zinc-600"
          }`}
        >
          {item.jabatan}
        </p>
      </div>
    </div>
  ))}
</div>


{/* SECTION TITLE */}
<h2
  className={`text-2xl font-semibold mt-24 mb-10 border-l-4 pl-4 ${
    darkMode
      ? "border-sky-400 text-zinc-100"
      : "border-sky-600 text-zinc-800"
  }`}
>
  Plat Nomor Korps Diplomatik
</h2>

{/* CARD GRID */}
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
{[
    { kode: "CD 12", negara: "Amerika Serikat", flag: "us" },
    { kode: "CD 13", negara: "India", flag: "in" },
    { kode: "CD 14", negara: "Britania Raya", flag: "gb" },
    { kode: "CD 15", negara: "Vatikan", flag: "va" },
    { kode: "CD 16", negara: "Norwegia", flag: "no" },
    { kode: "CD 17", negara: "Pakistan", flag: "pk" },
    { kode: "CD 18", negara: "Myanmar", flag: "mm" },
    { kode: "CD 19", negara: "China", flag: "cn" },
    { kode: "CD 20", negara: "Swedia", flag: "se" },
    { kode: "CD 21", negara: "Arab Saudi", flag: "sa" },
    { kode: "CD 22", negara: "Thailand", flag: "th" },
    { kode: "CD 23", negara: "Mesir", flag: "eg" },
    { kode: "CD 25", negara: "Filipina", flag: "ph" },
    { kode: "CD 26", negara: "Australia", flag: "au" },
    { kode: "CD 27", negara: "Irak", flag: "iq" },
    { kode: "CD 28", negara: "Belgia", flag: "be" },
    { kode: "CD 29", negara: "Uni Emirat Arab", flag: "ae" },
    { kode: "CD 30", negara: "Italia", flag: "it" },
    { kode: "CD 31", negara: "Swiss", flag: "ch" },
    { kode: "CD 32", negara: "Jerman", flag: "de" },
    { kode: "CD 33", negara: "Sri Lanka", flag: "lk" },
    { kode: "CD 34", negara: "Denmark", flag: "dk" },
    { kode: "CD 35", negara: "Kanada", flag: "ca" },
    { kode: "CD 36", negara: "Brasil", flag: "br" },
    { kode: "CD 37", negara: "Rusia", flag: "ru" },
    { kode: "CD 38", negara: "Afghanistan", flag: "af" },
    { kode: "CD 39", negara: "Yugoslavia", flag: "yu" },
    { kode: "CD 40", negara: "Ceko", flag: "cz" },
    { kode: "CD 41", negara: "Finlandia", flag: "fi" },
    { kode: "CD 42", negara: "Meksiko", flag: "mx" },
    { kode: "CD 43", negara: "Hungaria", flag: "hu" },
    { kode: "CD 44", negara: "Polandia", flag: "pl" },
    { kode: "CD 45", negara: "Iran", flag: "ir" },
    { kode: "CD 47", negara: "Malaysia", flag: "my" },
    { kode: "CD 48", negara: "Turki", flag: "tr" },
    { kode: "CD 49", negara: "Jepang", flag: "jp" },
    { kode: "CD 50", negara: "Bulgaria", flag: "bg" },
    { kode: "CD 51", negara: "Kamboja", flag: "kh" },
    { kode: "CD 52", negara: "Argentina", flag: "ar" },
    { kode: "CD 53", negara: "Rumania", flag: "ro" },
    { kode: "CD 54", negara: "Yunani", flag: "gr" },
    { kode: "CD 55", negara: "Yordania", flag: "jo" },
    { kode: "CD 56", negara: "Austria", flag: "at" },
    { kode: "CD 57", negara: "Syria", flag: "sy" },
    { kode: "CD 58", negara: "UNDP", flag: "un" },
    { kode: "CD 59", negara: "Selandia Baru", flag: "nz" },
    { kode: "CD 60", negara: "Belanda", flag: "nl" },
    { kode: "CD 61", negara: "Yaman", flag: "ye" },
    { kode: "CD 62", negara: "UPU", flag: "un" },
    { kode: "CD 63", negara: "Portugal", flag: "pt" },
    { kode: "CD 64", negara: "Aljazair", flag: "dz" },
    { kode: "CD 65", negara: "Korea Utara", flag: "kp" },
    { kode: "CD 66", negara: "Vietnam", flag: "vn" },
    { kode: "CD 67", negara: "Singapura", flag: "sg" },
    { kode: "CD 68", negara: "Spanyol", flag: "es" },
    { kode: "CD 69", negara: "Bangladesh", flag: "bd" },
    { kode: "CD 70", negara: "Panama", flag: "pa" },
    { kode: "CD 75", negara: "Korea Selatan", flag: "kr" },
    { kode: "CD 80", negara: "Papua Nugini", flag: "pg" },
    { kode: "CD 81", negara: "Nigeria", flag: "ng" },
    { kode: "CD 82", negara: "Chile", flag: "cl" },
    { kode: "CD 87", negara: "Kolombia", flag: "co" },
    { kode: "CD 88", negara: "Brunei Darussalam", flag: "bn" },
    { kode: "CD 98", negara: "Maroko", flag: "ma" },
    { kode: "CD 101", negara: "Tunisia", flag: "tn" },
    { kode: "CD 102", negara: "Kuwait", flag: "kw" },
    { kode: "CD 103", negara: "Laos", flag: "la" },
    { kode: "CD 104", negara: "Palestina", flag: "ps" },
    { kode: "CD 107", negara: "Libya", flag: "ly" },
    { kode: "CD 108", negara: "Peru", flag: "pe" },
    { kode: "CD 109", negara: "Slovakia", flag: "sk" },
    { kode: "CD 110", negara: "Sudan", flag: "sd" },
    { kode: "CD 130", negara: "Azerbaijan", flag: "az" },
  ].map((item, i) => (
    <div
      key={i}
      className={`group relative overflow-hidden rounded-xl p-5 border
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:scale-[1.03]
        ${
          darkMode
            ? "bg-zinc-800 border-zinc-700 hover:shadow-black/40"
            : "bg-white border-zinc-200 hover:shadow-zinc-300/50"
        }`}
    >
      {/* FLAG BACKGROUND */}
<img
  src={`https://flagcdn.com/w320/${item.flag}.png`}
  alt={item.negara}
  className="
    absolute right-2 bottom-2 w-24
    opacity-80            /* MOBILE: lebih jelas */
    sm:opacity-20         /* TABLET */
    lg:opacity-10         /* DESKTOP: lebih transparan */

    transition-all duration-300 ease-out
    group-hover:opacity-90
    group-hover:scale-110
    pointer-events-none
  "
/>


<div
  className={`text-base font-bold tracking-wide ${
    darkMode ? "text-sky-400" : "text-sky-600"
  }`}
>
  {item.kode}
</div>

<p
  className={`text-base mt-1 leading-snug ${
    darkMode ? "text-zinc-300" : "text-zinc-700"
  }`}
>
  {item.negara}
</p>

    </div>
  ))}
</div>


      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}
