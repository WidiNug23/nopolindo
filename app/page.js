"use client";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";
import Image from "next/image";

import {
  FaSearchLocation,
  FaCarSide,
  FaBook,
  FaArrowRight,
} from "react-icons/fa";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState({ open: false, src: "" });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 2); // 2 gambar
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-500 ${
        darkMode ? "bg-zinc-950 text-zinc-100" : "bg-white text-zinc-900"
      }`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="max-w-5xl mx-auto px-6 pt-20 pb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            <span className={darkMode ? "text-white" : "text-zinc-900"}>
              Informasi Plat Nomor Indonesia
            </span>
          </h1>

          <p
            className={`max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed ${
              darkMode ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Temukan arti nomor plat kendaraan hingga jenis plat kendaraan secara umum di NopolIndo
          </p>
        </section>

        {/* MENU UTAMA */}
        <section className="max-w-6xl mx-auto px-6 mt-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Temukan Plat",
                desc: "Cari plat berdasarkan kode wilayah secara umum",
                icon: <FaSearchLocation />,
                href: "/temukan-plat",
                color: darkMode ? "text-sky-400" : "text-sky-600",
                hoverBg: darkMode ? "group-hover:bg-sky-950/20" : "group-hover:bg-sky-50",
              },
              {
                title: "Jenis Plat",
                desc: "Macam-macam plat kendaraan di Indonesia secara umum",
                icon: <FaCarSide />,
                href: "/jenis-plat",
                color: darkMode ? "text-emerald-400" : "text-emerald-600",
                hoverBg: darkMode ? "group-hover:bg-emerald-950/20" : "group-hover:bg-emerald-50",
              },
              {
                title: "Tentang",
                desc: "Referensi dan informasi seputar NopolIndo",
                icon: <FaBook />,
                href: "/tentang",
                color: darkMode ? "text-violet-400" : "text-violet-600",
                hoverBg: darkMode ? "group-hover:bg-violet-950/20" : "group-hover:bg-violet-50",
              },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="group">
                <div
                  className={`h-full cursor-pointer rounded-2xl p-8 border transition-all duration-300 group-hover:-translate-y-2 ${
                    darkMode
                      ? `bg-zinc-900 border-zinc-800 ${item.hoverBg} group-hover:border-zinc-700`
                      : `bg-white border-zinc-200 ${item.hoverBg} group-hover:border-zinc-300 group-hover:shadow-xl group-hover:shadow-zinc-200`
                  }`}
                >
                  <div className={`text-3xl mb-5 transition-transform group-hover:scale-110 ${item.color}`}>
                    {item.icon}
                  </div>

                  <h3 className={`font-bold text-xl mb-2 flex items-center gap-2 ${darkMode ? "text-zinc-100" : "text-zinc-900"}`}>
                    {item.title}
                    <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      darkMode ? "text-zinc-400" : "text-zinc-500"
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
        <section className="max-w-6xl mx-auto px-6 mt-24 mb-20">
          <div
            className={`rounded-[2.5rem] overflow-hidden border transition-colors ${
              darkMode ? "bg-zinc-900 border-zinc-800" : "bg-zinc-50 border-zinc-200 shadow-sm"
            }`}
          >
            <div className="p-8 md:p-12">
              <h2 className={`text-3xl font-bold mb-10 text-center tracking-tight ${darkMode ? "text-white" : "text-zinc-900"}`}>
                Cara Membaca Plat Nomor Kendaraan
              </h2>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* KIRI: IMAGE SLIDER */}
                <div className="flex flex-col items-center w-full">
                  <div className={`relative w-full max-w-[460px] aspect-[21/11] rounded-2xl shadow-2xl overflow-hidden cursor-zoom-in border-4 ${
                    darkMode ? 'border-zinc-800 bg-zinc-950' : 'border-white bg-white shadow-zinc-300'
                  }`}>
                    <div
                      className="flex transition-transform duration-700 ease-in-out h-full"
                      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                      {["/image/1.png", "/image/7.png"].map((src, index) => (
                        <div key={index} className="flex-shrink-0 w-full h-full relative">
                          <Image
                            src={src}
                            alt={`Contoh plat nomor ${index + 1}`}
                            fill
                            className="object-cover"
                            onClick={() => setIsOpen({ open: true, src })}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* DOT NAVIGATION */}
                  <div className="flex mt-6 justify-center space-x-3">
                    {[0, 1].map((index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? "w-8 bg-sky-500"
                            : "w-2 bg-zinc-300 dark:bg-zinc-700"
                        }`}
                      />
                    ))}
                  </div>

                  <p className={`mt-8 px-6 py-4 rounded-2xl text-sm border font-medium leading-relaxed ${
                    darkMode ? "bg-zinc-950 border-zinc-800 text-zinc-300" : "bg-white border-zinc-200 text-zinc-700 shadow-sm"
                  }`}>
                    Contoh: <span className={`font-bold underline underline-offset-4 ${darkMode ? "text-sky-400" : "text-sky-600"}`}>B 1234 CD</span> berarti kendaraan berasal dari wilayah Jakarta dengan nomor registrasi tertentu.
                  </p>
                </div>

                {/* KANAN: PENJELASAN */}
                <div className="space-y-6">
                  <p className={`text-lg leading-relaxed ${darkMode ? "text-zinc-300" : "text-zinc-700"}`}>
                    Plat nomor kendaraan di Indonesia memiliki pola umum:{" "}
                    <span className={`font-bold px-2 py-1 rounded ${
                      darkMode ? "bg-sky-900/40 text-sky-300" : "bg-sky-100 text-sky-700"
                    }`}>
                      Huruf – Angka – Huruf
                    </span>. Setiap bagian memiliki arti tersendiri.
                  </p>

                  <ul className="space-y-6">
                    {[
                      { label: "Kode Huruf Depan", color: darkMode ? "text-amber-400" : "text-amber-600", desc: "Menunjukkan wilayah kendaraan terdaftar atau daerah dikeluarkannya TNKB. (contoh: B = Jakarta, D = Bandung)" },
                      { label: "Angka Tengah", color: darkMode ? "text-blue-400" : "text-blue-600", desc: "Alokasi Nomor TNKB. Lihat detail di ", link: true },
                      { label: "Kode Huruf Belakang", color: darkMode ? "text-emerald-400" : "text-emerald-600", desc: "Menunjukkan lokasi sub-daerah kendaraan dan jenis kendaraan." },
                      { label: "Kode Masa Berlaku", color: darkMode ? "text-rose-400" : "text-rose-600", desc: "Menunjukkan masa penggantian TNKB setiap 5 tahun." }
                    ].map((li, idx) => (
                      <li key={idx} className="flex gap-4 group">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm border transition-colors ${
                          darkMode ? 'bg-zinc-800 border-zinc-700 text-zinc-400' : 'bg-white border-zinc-200 text-zinc-500 shadow-sm'
                        }`}>
                          {idx + 1}
                        </div>
                        <div>
                          <p className={`font-bold text-lg ${li.color}`}>{li.label}</p>
                          <p className={`mt-1 leading-relaxed ${darkMode ? "text-zinc-400" : "text-zinc-600"}`}>
                            {li.desc}
                            {li.link && (
                              <Link
                                href="/jenis-plat"
                                className={`font-bold underline decoration-sky-500/30 hover:decoration-sky-500 transition-all ${
                                  darkMode ? "text-sky-400" : "text-sky-600"
                                }`}
                              >
                                Jenis Plat
                              </Link>
                            )}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MODAL POPUP */}
        {isOpen.open && (
          <div
            className="fixed inset-0 bg-black/95 backdrop-blur-sm flex justify-center items-center z-[100] p-4 animate-in fade-in duration-300"
            onClick={() => setIsOpen({ open: false, src: "" })}
          >
            <div className="relative max-w-5xl w-full">
              <Image
                src={isOpen.src}
                alt="Gambar diperbesar"
                width={1200}
                height={600}
                className="object-contain rounded-xl w-full h-auto shadow-2xl"
              />
              <button
                className="absolute -top-12 right-0 text-white text-xl font-medium hover:text-sky-400 transition-colors"
                onClick={() => setIsOpen({ open: false, src: "" })}
              >
                Tutup [✕]
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}