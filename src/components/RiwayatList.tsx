// components/RiwayatList.tsx (diperbarui) 
import { Link } from "expo-router";
<<<<<<< HEAD
import { View } from "react-native";
import Teks from "./Teks";
=======
import { Text, View } from "react-native";
>>>>>>> d0e104160e8fe0dd197f30fd23868c53ec8303ea

interface RiwayatListProps {
  daftarKota: string[];
}

export default function RiwayatList({ daftarKota }: RiwayatListProps) {
  return (
    <View>
      {daftarKota.map((kota) => (
        // Format objek pada href lolos pengecekan TypeScript Expo Router 
        <Link key={kota} href={{ pathname: "/detail/[kota]", params: { kota } }}>
<<<<<<< HEAD
          <Teks>{kota}</Teks>
=======
          <Text>{kota}</Text>
>>>>>>> d0e104160e8fe0dd197f30fd23868c53ec8303ea
        </Link>
      ))}
    </View>
  );
} 