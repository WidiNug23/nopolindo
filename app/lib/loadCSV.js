import Papa from "papaparse";

export async function loadCSV() {
  // Ambil CSV dari folder public
  const res = await fetch("/nopol_indonesia.csv");
  if (!res.ok) throw new Error("CSV tidak ditemukan di public folder!");
  const text = await res.text();

  const { data } = Papa.parse(text, {
    header: true,
    skipEmptyLines: true,
  });

  // Buat grup berdasarkan kode_plat lengkap (bisa 1 atau 2 huruf)
  const grouped = {};
  data.forEach((row) => {
    // Skip baris yang ada field kosong
    if (!row.kode_plat || !row.kode_akhir_awal || !row.wilayah || !row.provinsi) return;

    const kodePlat = row.kode_plat.trim();
    const groupKey = kodePlat.length > 1 ? kodePlat.slice(0, 2) : kodePlat;

    if (!grouped[groupKey]) grouped[groupKey] = [];
    grouped[groupKey].push({
      kode_plat: kodePlat,
      kode_akhir: row.kode_akhir_awal.trim(),
      wilayah: row.wilayah.trim(),
      provinsi: row.provinsi.trim(),
    });
  });

  // Hapus grup kosong (jika ada)
  Object.keys(grouped).forEach((key) => {
    if (grouped[key].length === 0) delete grouped[key];
  });

  return grouped;
}
