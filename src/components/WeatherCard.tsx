// src/components/WeatherCard.tsx
<<<<<<< HEAD
import { View } from "react-native";
import Teks from "./Teks";
import { spacing, typeScale } from "../constants/styles";
import { useTema } from "../context/TemaContext";
=======
import { Text, View } from "react-native";
import { spacing, typeScale } from "../constants/styles";
>>>>>>> d0e104160e8fe0dd197f30fd23868c53ec8303ea
import { TingkatAQI, WeatherCardProps } from "../types/cuaca";

const warnaPerTingkat: Record<TingkatAQI, string> = {
  BAIK: "green",
  SEDANG: "goldenrod",
  TIDAK_SEHAT: "orange",
  BERBAHAYA: "crimson",
};

export default function WeatherCard({
  kota,
  suhu,
  tingkatAQI,
  indeksAQI,
}: WeatherCardProps) {
<<<<<<< HEAD
  const { warna } = useTema();

=======
>>>>>>> d0e104160e8fe0dd197f30fd23868c53ec8303ea
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
<<<<<<< HEAD
        backgroundColor: warna.kartu,
      }}
    >
      <Teks style={{ fontWeight: "bold", fontSize: typeScale.judul }}>
        {kota}
      </Teks>
      <Teks style={{ fontSize: 32 }}>{suhu}°C</Teks>
      <Teks
        style={{ color: warnaPerTingkat[tingkatAQI], fontSize: typeScale.isi }}
      >
        {teksAQI}
      </Teks>
=======
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
>>>>>>> d0e104160e8fe0dd197f30fd23868c53ec8303ea
    </View>
  );
}
