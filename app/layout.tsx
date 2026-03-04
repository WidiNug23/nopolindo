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

export const metadata: Metadata = {
  title: "NopolIndo - Cek Plat Nomor Kendaraan & Kode Wilayah Online",
  description: "Cek informasi plat nomor kendaraan (Nopol), arti kode wilayah, dan jenis plat nomor seluruh Indonesia dengan mudah di NopolIndo.",
  
  // 1. Tambahkan metadata metadataBase agar URL absolut terbentuk dengan benar
  metadataBase: new URL('https://nopolindo.vercel.app'),

  // 2. Tambahkan OpenGraph agar nama situs (Site Name) terbaca jelas oleh Google & Media Sosial
  openGraph: {
    title: "NopolIndo",
    description: "Cek informasi plat nomor kendaraan & kode wilayah seluruh Indonesia.",
    url: "https://nopolindo.vercel.app",
    siteName: "NopolIndo", // Ini kunci agar nama "NopolIndo" muncul di Google
    locale: "id_ID",
    type: "website",
  },

  // 3. Tambahkan Robots agar Google diizinkan mengindeks
  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "gaw8QXJG1ncc_GUWizolpBtn0xKpAvUlnbZJoaJAIgc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id"> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}