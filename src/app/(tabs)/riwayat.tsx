<<<<<<< HEAD

import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  ambilSemuaFavorit,
  hapusFavorit,
} from "../../services/favoritStorage";
import { KotaFavorit } from "../../types/favorit";

export default function TabRiwayat() {
  const [daftarFavorit, setDaftarFavorit] = useState<KotaFavorit[]>([]);

  useFocusEffect(
    useCallback(() => {
      ambilSemuaFavorit().then(setDaftarFavorit);
    }, []),
  );

  async function hapus(id: number) {
    await hapusFavorit(id);
    setDaftarFavorit((prev) => prev.filter((k) => k.id !== id));
  }

  // Tambahan latihan mandiri: konfirmasi sebelum menghapus
  function konfirmasiHapus(kota: KotaFavorit) {
    Alert.alert(
      "Konfirmasi Hapus",
      `Apakah kamu yakin ingin menghapus ${kota.nama}?`,
      [
        {
          text: "Batal",
          style: "cancel",
        },
        {
          text: "Hapus",
          style: "destructive",
          onPress: () => {
            hapus(kota.id).catch(() => {
              Alert.alert("Error", "Gagal menghapus kota favorit.");
            });
          },
        },
      ],
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 16, gap: 12 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        Kota Favorit
      </Text>

      {/* Tambahan latihan mandiri: jumlah kota favorit */}
      <Text>Tersimpan {daftarFavorit.length} kota</Text>

      {daftarFavorit.length === 0 && (
        <Text>Belum ada kota favorit</Text>
      )}

      {daftarFavorit.map((kota) => (
        <View
          key={kota.id}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text>{kota.nama}</Text>

          {/* Tombol sekarang meminta konfirmasi dahulu */}
          <Button
            title="Hapus"
            onPress={() => konfirmasiHapus(kota)}
          />
        </View>
      ))}
    </SafeAreaView>
  );
=======
// app/(tabs)/riwayat.tsx (ganti <View> terluar menjadi <SafeAreaView>) 
import { SafeAreaView } from "react-native-safe-area-context";
import RiwayatList from "../../components/RiwayatList";

export default function TabRiwayat() {
    const daftarKota = ["Pekalongan", "Jakarta", "Semarang"]; // data contoh sementara 

    return (
        <SafeAreaView style={{ flex: 1, padding: 16 }}>
            <RiwayatList daftarKota={daftarKota} />
        </SafeAreaView>
    );
>>>>>>> 8537c32bf4424fc388a04a4a4821f5a83416610e
}