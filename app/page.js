"use client";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";
import Image from "next/image";

import {
  FaSearchLocation,
  FaCarSide,
  FaPaintBrush,
  FaBook,
} from "react-icons/fa";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState({ open: false, src: "" });
  const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % 2); // 2 gambar
  }, 3000); // ganti tiap 3 detik

  return () => clearInterval(interval);
}, []);


  return (
    <div
      className={`min-h-screen flex flex-col transition ${
        darkMode ? "bg-zinc-900 text-zinc-100" : "bg-zinc-100 text-zinc-900"
      }`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="flex-grow">
        {/* HERO */}
        <section className="max-w-5xl mx-auto px-6 pt-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Informasi Plat Nomor Indonesia
          </h1>

          <p
            className={`mt-4 max-w-2xl mx-auto text-sm md:text-base ${
              darkMode ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Temukan arti nomor plat kendaraan hingga jenis plat kendaraan secara umum di NopolIndo
          </p>
        </section>

{/* MENU UTAMA */}
<section className="max-w-5xl mx-auto px-6 mt-14">
  <div className="grid gap-6 justify-center sm:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
    {[
      {
        title: "Temukan Plat",
        desc: "Cari plat berdasarkan kode wilayah secara umum",
        icon: <FaSearchLocation />,
        href: "/temukan-plat",
      },
      {
        title: "Jenis Plat",
        desc: "Macam-macam plat kendaraan di Indonesia secara umum",
        icon: <FaCarSide />,
        href: "/jenis-plat",
      },
      {
        title: "Tentang",
        desc: "Referensi dan informasi seputar NopolIndo",
        icon: <FaBook />,
        href: "/tentang",
      },
    ].map((item, i) => (
      <Link key={i} href={item.href} className="flex justify-center">
        <div
          className={`cursor-pointer rounded-xl p-5 border transition
          hover:-translate-y-1 hover:shadow-lg w-full max-w-xs
          ${darkMode
            ? "bg-zinc-800 border-zinc-700 hover:shadow-black/30"
            : "bg-white border-zinc-200 hover:shadow-zinc-300/40"
          }`}
        >
          <div
            className={`text-2xl mb-3 flex justify-center ${
              darkMode ? "text-sky-400" : "text-sky-600"
            }`}
          >
            {item.icon}
          </div>

          <h3 className="font-semibold text-lg text-center">{item.title}</h3>
          <p
            className={`mt-1 text-sm text-center ${
              darkMode ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            {item.desc}
          </p>
        </div>
      </Link>
    ))}
  </div>
</section>


{/* CARA MEMBACA PLAT NOMOR */}
<section className="max-w-5xl mx-auto px-6 mt-20">
  <div
    className={`rounded-xl p-6 border ${
      darkMode ? "bg-zinc-800 border-zinc-700" : "bg-white border-zinc-200"
    }`}
  >
    <h2 className="text-2xl font-semibold mb-6 text-center">
      Cara Membaca Plat Nomor Kendaraan
    </h2>

    {/* GRID UNTUK KIRI-KANAN */}
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* KIRI: IMAGE SLIDER */}
      <div className="flex flex-col items-center w-full">
        <div className="relative w-full max-w-[420px] aspect-[21/11] rounded-lg shadow-md overflow-hidden cursor-pointer">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {["/image/1.png", "/image/7.png"].map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Contoh plat nomor ${index + 1}`}
                width={420}
                height={220}
                className="flex-shrink-0 w-full h-full object-cover"
                onClick={() => setIsOpen({ open: true, src })}
              />
            ))}
          </div>
        </div>

        {/* DOT NAVIGATION */}
        <div className="flex mt-2 justify-center space-x-2">
          {["/image/1.png", "/image/7.png"].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex
                  ? "bg-sky-600 dark:bg-sky-400"
                  : "bg-zinc-400 dark:bg-zinc-600"
              }`}
            />
          ))}
        </div>

        {/* CONTOH */}
        <p className={`mt-4 text-sm md:text-base ${darkMode ? "text-zinc-400" : "text-zinc-600"}`}>
          Contoh: <span className="font-semibold">B 1234 CD</span> berarti kendaraan berasal dari wilayah Jakarta dengan nomor registrasi tertentu.
        </p>
      </div>

      {/* KANAN: PENJELASAN */}
      <div className="space-y-4 text-sm md:text-base leading-relaxed">
        <p>
          Plat nomor kendaraan di Indonesia memiliki pola umum:{" "}
          <span className="font-semibold">Huruf – Angka – Huruf</span>. Setiap bagian memiliki arti tersendiri.
        </p>

<ul className="list-decimal list-inside space-y-4">
  <li className="ml-2">
    <p className="font-semibold text-yellow-400 inline">Kode Huruf Depan</p>
    <p className="ml-4 mt-1">
      Menunjukkan wilayah kendaraan terdaftar atau daerah dikeluarkannya TNKB.{" "}
      <span className="italic">(contoh: B = Jakarta, D = Bandung)</span>
    </p>
  </li>

  <li className="ml-2">
    <p className="font-semibold text-blue-500 inline">Angka Tengah</p>
    <p className="ml-4 mt-1">
      Alokasi Nomor TNKB. Lihat detail di{" "}
      <Link
        href="/jenis-plat"
        className={`text-sky-600 hover:underline ${darkMode ? "text-sky-400" : ""}`}
      >
        Jenis Plat
      </Link>.
    </p>
  </li>

  <li className="ml-2">
    <p className="font-semibold text-green-500 inline">Kode Huruf Belakang</p>
    <p className="ml-4 mt-1">
      Menunjukkan lokasi sub-daerah kendaraan dan jenis kendaraan.
    </p>
  </li>

  <li className="ml-2">
    <p className="font-semibold text-red-400 inline">Kode Masa Berlaku</p>
    <p className="ml-4 mt-1">Menunjukkan masa penggantian TNKB setiap 5 tahun.</p>
  </li>
</ul>

      </div>
    </div>

    {/* MODAL POPUP */}
    {isOpen.open && (
      <div
        className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
        onClick={() => setIsOpen({ open: false, src: "" })}
      >
        <div className="relative max-w-full max-h-full px-4">
          <Image
            src={isOpen.src}
            alt="Gambar diperbesar"
            width={800}
            height={420}
            className="object-contain rounded-lg max-w-full max-h-[90vh]"
          />
          <button
            className="absolute top-2 right-2 text-white text-2xl font-bold"
            onClick={() => setIsOpen({ open: false, src: "" })}
          >
            ✕
          </button>
        </div>
      </div>
    )}
  </div>
</section>

      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}
