"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Tentang() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-zinc-900 text-zinc-100" : "bg-zinc-100 text-zinc-900"
      }`}
    >
      {/* Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Judul Halaman */}
      <div className="max-w-5xl mx-auto px-6 py-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 transition-colors duration-500">
          Informasi NopolIndo
        </h1>
      </div>

      {/* INFO */}
      <section className="max-w-5xl mx-auto px-6 mb-8">
        <div
          className={`rounded-xl p-6 border transition-colors duration-500 ${
            darkMode ? "bg-zinc-800 border-zinc-700" : "bg-white border-zinc-200"
          }`}
        >
          <h2 className="text-2xl font-semibold mb-4 transition-colors duration-500">
            Tentang Website Ini
          </h2>
<p
  className={`text-base md:text-lg leading-relaxed transition-colors duration-500 ${
    darkMode ? "text-zinc-400" : "text-zinc-600"
  }`}
>
  NopolIndo dibuat sebagai pencarian informasi plat nomor kendaraan di Indonesia secara umum dan tidak detail. NopolIndo disusun sedemikian rupa untuk memudahkan pengguna dalam mencari informasi plat nomor kendaraan di Indonesia. NopolIndo terus berbenah dalam menyediakan informasi kepada pengguna.
  <br />
  <br />
  Apabila terdapat kritik, masukan, dan saran yang membangun, silakan hubungi email{" "}
  <a
    href="mailto:infonopolindo@gmail.com"
    className="font-medium text-sky-600 hover:underline"
  >
    infonopolindo@gmail.com
  </a>.
</p>

        </div>
      </section>

      {/* SUMBER / REFERENSI */}
      <section className="max-w-5xl mx-auto px-6 mb-10">
        <div
          className={`rounded-xl p-6 border transition-colors duration-500 ${
            darkMode ? "bg-zinc-800 border-zinc-700" : "bg-white border-zinc-200"
          }`}
        >
          <h2 className="text-2xl font-semibold mb-4 transition-colors duration-500">
            Sumber Referensi
          </h2>
          <ul
            className={`list-disc list-inside text-base md:text-lg transition-colors duration-500 ${
              darkMode ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            <li>
              <a href="https://cintamobil.com/pengemudian/plat-nomor-kendaraan-aid10829" target="_blank" className="text-sky-600 hover:underline">
                cintamobil.com – Plat Nomor Kendaraan
              </a>
            </li>
            <li>
              <a href="https://bapenda.sulselprov.go.id/v1/2021/06/11/nomor-plat-kendaraan-dari-seluruh-indonesia/" target="_blank" className="text-sky-600 hover:underline">
                Bapenda Sulsel – Nomor Plat Kendaraan
              </a>
            </li>
            <li>
              <a href="https://wuling.id/id/blog/lifestyle/daftar-lengkap-kode-plat-nomor-kendaraan-di-indonesia" target="_blank" className="text-sky-600 hover:underline">
                Wuling – Daftar Kode Plat
              </a>
            </li>
            <li>
              <a href="https://autopedia.id/id/blog/arti-kode-plat-nomor-kendaraan-di-indonesia-beserta-sejarahnya-XTX9WjUVJbYqoDoQ" target="_blank" className="text-sky-600 hover:underline">
                Autopedia – Arti Kode Plat
              </a>
            </li>
            <li>
              <a href="https://www.metrotvnews.com/read/N0BC1B1r-daftar-pelat-nomor-pejabat-ri-lengkap-dari-presiden-hingga-menteri" target="_blank" className="text-sky-600 hover:underline">
                MetroTV – Plat Nomor Pejabat RI
              </a>
            </li>
            <li>
              <a href="https://daihatsu.co.id/tips-and-event/tips-sahabat/detail-content/plat-cd-daerah-mana-simak-jawabannya-di-sini/" target="_blank" className="text-sky-600 hover:underline">
                Daihatsu – Plat CD
              </a>
            </li>
            <li>
              <a href="https://chery.co.id/id/tips-dan-trik/kode-plat-nomor-kendaraan" target="_blank" className="text-sky-600 hover:underline">
                Chery – Kode Plat
              </a>
            </li>
            <li>
              <a href="https://cintamobil.com/pengemudian/kode-plat-nomor-belakang-aid15705" target="_blank" className="text-sky-600 hover:underline">
                Cintamobil – Kode Plat Belakang
              </a>
            </li>
            <li>
              <a href="https://otomotif.kompas.com/read/2021/08/31/100717415/ada-pelat-nomor-kendaraan-warna-hijau-sudah-tahu-fungsi-dan-artinya" target="_blank" className="text-sky-600 hover:underline">
                Kompas – Plat Warna Hijau
              </a>
            </li>
            <li>
              <a href="https://otomotif.kompas.com/read/2022/09/19/141200015/kenali-jenis-warna-pelat-nomor-kendaraan-listrik-di-indonesia" target="_blank" className="text-sky-600 hover:underline">
                Kompas – Plat Kendaraan Listrik
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
}
