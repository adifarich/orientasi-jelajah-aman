import { typeScale } from "@/constants/styles";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabDetail() {
<<<<<<< HEAD
  return (
    <SafeAreaView style={{ padding: 16 }}>
      <Text
        accessibilityLabel="Informasi tentang aplikasi jelajah aman "
        style={{ fontSize: typeScale.judul, fontWeight: "bold" }}
      >
        Jelajah Aman
      </Text>
      <Text>Versi 1.0.0</Text>
      <Text>Pembuat: Mohamad Adi Farich (60324049)</Text>
    </SafeAreaView>
  );
}
=======
    return (
        <SafeAreaView style={{ padding: 16 }}>
            <Text accessibilityLabel="Informasi tentang aplikasi jelajah aman " style={{ fontSize: typeScale.judul, fontWeight: "bold" }}>Jelajah Aman</Text>
            <Text>Versi 1.0.0</Text>
            <Text>Pembuat: Desta Adyangga Saputra (60324082)</Text>
        </SafeAreaView>
    );
} 
>>>>>>> e6d0380787c8f0df51f1fe1fcde67dc3409e6936
