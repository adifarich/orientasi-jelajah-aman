// src/app/(tabs)/pengaturan.tsx
import { useState } from "react";
<<<<<<< HEAD
import { Button, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Teks from "../../components/Teks";
import { PilihanTema, useTema } from "../../context/TemaContext";
import { hapusSemuaCache } from "../../services/cacheRepository";

const OPSI_TEMA: { nilai: PilihanTema; label: string }[] = [
  { nilai: "terang", label: "Terang" },
  { nilai: "gelap", label: "Gelap" },
  { nilai: "sistem", label: "Ikuti Sistem" },
];

export default function TabPengaturan() {
  const [pesan, setPesan] = useState<string | null>(null);
  const { pilihan, warna, ubahTema } = useTema();
=======
import { Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { hapusSemuaCache } from "../../services/cacheRepository";

export default function TabPengaturan() {
  const [pesan, setPesan] = useState<string | null>(null);
>>>>>>> d0e104160e8fe0dd197f30fd23868c53ec8303ea

  async function hapusDataTersimpan() {
    try {
      await hapusSemuaCache();
      setPesan("Data cuaca tersimpan sudah dihapus.");
    } catch {
      setPesan("Gagal menghapus data cuaca tersimpan.");
    }
  }

  return (
<<<<<<< HEAD
    <SafeAreaView
      style={{ flex: 1, padding: 16, gap: 12, backgroundColor: warna.latar }}
    >
      <Teks style={{ fontSize: 18, fontWeight: "bold" }}>Jelajah Aman</Teks>
      <Teks>Versi 1.0.0</Teks>

      <Teks style={{ fontSize: 16, fontWeight: "bold", marginTop: 8 }}>
        Mode Tampilan
      </Teks>
      {OPSI_TEMA.map((opsi) => {
        const terpilih = pilihan === opsi.nilai;
        return (
          <TouchableOpacity
            key={opsi.nilai}
            onPress={() => ubahTema(opsi.nilai)}
            accessibilityRole="radio"
            accessibilityState={{ selected: terpilih }}
            accessibilityLabel={`Mode tampilan ${opsi.label}`}
            style={{
              padding: 12,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: terpilih ? warna.aksen : warna.garis,
              backgroundColor: warna.kartu,
            }}
          >
            <Teks style={{ fontWeight: terpilih ? "bold" : "normal" }}>
              {terpilih ? "\u25CF " : "\u25CB "}
              {opsi.label}
            </Teks>
          </TouchableOpacity>
        );
      })}

      <Teks style={{ fontSize: 16, fontWeight: "bold", marginTop: 8 }}>
        Data Tersimpan
      </Teks>
      <Button title="Hapus Data Cuaca Tersimpan" onPress={hapusDataTersimpan} />
      {pesan && <Teks accessibilityLabel={pesan}>{pesan}</Teks>}
=======
    <SafeAreaView style={{ flex: 1, padding: 16, gap: 12 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Jelajah Aman</Text>
      <Text>Versi 1.0.0</Text>
      <Button title="Hapus Data Cuaca Tersimpan" onPress={hapusDataTersimpan} />
      {pesan && <Text accessibilityLabel={pesan}>{pesan}</Text>}
>>>>>>> d0e104160e8fe0dd197f30fd23868c53ec8303ea
    </SafeAreaView>
  );
}
