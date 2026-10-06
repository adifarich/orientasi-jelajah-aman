<<<<<<< HEAD
// src/components/WeatherCard.tsx
import { Text, View } from "react-native";
import { spacing, typeScale } from "../constants/styles";
import { TingkatAQI, WeatherCardProps } from "../types/cuaca";
const warnaPerTingkat: Record<TingkatAQI, string> = {
  BAIK: "green",
  SEDANG: "goldenrod",
  TIDAK_SEHAT: "orange",
  BERBAHAYA: "crimson",
};
=======
// components/WeatherCard.tsx
import { Text, View } from "react-native";
import { WeatherCardProps } from "../types/cuaca";
// 1. Tambahkan baris import ini untuk memanggil variabel dari styles.ts 
import { spacing, typeScale } from "../constants/styles";

>>>>>>> e6d0380787c8f0df51f1fe1fcde67dc3409e6936
export default function WeatherCard({
  kota,
  suhu,
  tingkatAQI,
<<<<<<< HEAD
  indeksAQI,
}: WeatherCardProps) {
  const teksAQI =
    indeksAQI !== undefined
      ? `AQI: ${indeksAQI} (${tingkatAQI})`
      : `AQI: ${tingkatAQI}`;
  const labelAksesibilitas =
    indeksAQI !== undefined
      ? `Cuaca ${kota}, suhu ${suhu} derajat, indeks kualitas udara ${indeksAQI}, kategori
${tingkatAQI}`
      : `Cuaca ${kota}, suhu ${suhu} derajat, kualitas udara ${tingkatAQI}`;
  return (
    <View
      accessible
      accessibilityLabel={labelAksesibilitas}
      style={{
        padding: spacing.sedang,
        borderRadius: 8,
        backgroundColor: "#F4F7FA",
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: typeScale.judul }}>
        {kota}
      </Text>
      <Text style={{ fontSize: 32 }}>{suhu}°C</Text>
      <Text
        style={{ color: warnaPerTingkat[tingkatAQI], fontSize: typeScale.isi }}
      >
        {teksAQI}
      </Text>
    </View>
=======
}: WeatherCardProps) {
  const warnaAQI = tingkatAQI === "BAIK" ? "green" : "orange";
  return (
    // 2. Ganti angka padding menjadi spacing.sedang 
    <View
      accessible
      accessibilityLabel={`Cuaca ${kota}, suhu ${suhu} derajat, kualitas udara ${tingkatAQI}`}
      style={{ padding: spacing.sedang, borderRadius: 8, backgroundColor: "#F4F7FA" }}
    >
      <Text style={{ fontWeight: "bold", fontSize: typeScale.judul }}>{kota}</Text>
      <Text style={{ fontSize: 32 }}>{suhu}°C</Text>
      <Text style={{ color: warnaAQI, fontSize: typeScale.isi }}>AQI: {tingkatAQI}</Text>
    </View>

>>>>>>> e6d0380787c8f0df51f1fe1fcde67dc3409e6936
  );
}
