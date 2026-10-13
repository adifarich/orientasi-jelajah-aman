// types/cuaca.ts
export interface DataCuaca {
  kota: string;
  suhu: number;
  kelembapan: number;
  catatan?: string;
}
export type TingkatAQI = "BAIK" | "SEDANG" | "TIDAK_SEHAT" | "BERBAHAYA";

export interface WeatherCardProps {
  kota: string;
  suhu: number;
  tingkatAQI: TingkatAQI;
<<<<<<< HEAD
  indeksAQI?: number; // baru: angka asli dari API, opsional
=======
<<<<<<< HEAD
  indeksAQI?: number; // baru: angka asli dari API, opsional
=======
>>>>>>> e6d0380787c8f0df51f1fe1fcde67dc3409e6936
>>>>>>> 8537c32bf4424fc388a04a4a4821f5a83416610e
}

export interface LaporanUdara {
  kota: string;
  indeksAQI: number;
  tingkat: TingkatAQI;
  diperbaruiPada?: string;
}
