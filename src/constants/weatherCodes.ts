// src/constants/weatherCodes.ts
<<<<<<< HEAD

=======
>>>>>>> 8537c32bf4424fc388a04a4a4821f5a83416610e
const kamusKodeCuaca: Record<number, string> = {
  0: "Cerah",
  1: "Cerah Berawan",
  2: "Berawan Sebagian",
  3: "Mendung",
  45: "Berkabut",
  48: "Kabut Beku",
  51: "Gerimis Ringan",
  53: "Gerimis Sedang",
  55: "Gerimis Lebat",
  61: "Hujan Ringan",
  63: "Hujan Sedang",
  65: "Hujan Lebat",
  71: "Salju Ringan",
  80: "Hujan Lokal Ringan",
  81: "Hujan Lokal Sedang",
  82: "Hujan Lokal Lebat",
  95: "Badai Petir",
};
<<<<<<< HEAD

=======
>>>>>>> 8537c32bf4424fc388a04a4a4821f5a83416610e
export function labelKodeCuaca(kode: number): string {
  return kamusKodeCuaca[kode] ?? "Tidak diketahui";
}
