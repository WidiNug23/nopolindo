import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Update bagian ini untuk SEO yang lebih baik
export const metadata: Metadata = {
  title: "NopolIndo - Cek Plat Nomor Kendaraan & Kode Wilayah Online",
  description: "Cek informasi plat nomor kendaraan (Nopol), arti kode wilayah, dan jenis plat nomor seluruh Indonesia dengan mudah di NopolIndo.",
  verification: {
    google: "gaw8QXJG1ncc_GUWizolpBtn0xKpAvUlnbZJoaJAIgc", // Kode verifikasi Google kamu
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id"> {/* Saya ganti ke "id" agar Google tahu ini web bahasa Indonesia */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}