<<<<<<< HEAD
// src/app/tambah-favorit.tsx
import { router, useLocalSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";
import { tambahFavorit } from "../services/favoritStorage";

export default function ModalTambahFavorit() {
  const { id, nama, lat, lon } = useLocalSearchParams<{
    id: string;
    nama: string;
    lat: string;
    lon: string;
  }>();

  async function simpan() {
    await tambahFavorit({
      id: Number(id),
      nama,
      latitude: Number(lat),
      longitude: Number(lon),
    });
    router.back();
  }

  return (
    <View style={{ padding: 16, gap: 16 }}>
      <Text>Tambahkan {nama} ke daftar favorit?</Text>
      <Button title="Simpan" onPress={simpan} />
    </View>
  );
}
=======
// app/tambah-favorit.tsx 
import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function ModalTambahFavorit() {
    return (
        <View style={{ padding: 16 }}>
            <Text>Tambahkan kota ini ke daftar favorit?</Text>
            <Button title="Simpan" onPress={() => router.back()} />
        </View>
    );
} 
>>>>>>> 8537c32bf4424fc388a04a4a4821f5a83416610e
