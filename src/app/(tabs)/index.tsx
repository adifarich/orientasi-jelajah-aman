<<<<<<< HEAD
// src/app/(tabs)/index.tsx
import { router, useFocusEffect } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { ambilSemuaFavorit } from "../../services/favoritStorage";

import {
  ActivityIndicator,
  Alert,
  Button,
  Text,
  TouchableOpacity,
  View
=======
<<<<<<< HEAD
// src/app/(tabs)/index.tsx
import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Button,
  Text,
  TouchableOpacity,
  View,
>>>>>>> 8537c32bf4424fc388a04a4a4821f5a83416610e
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AtribusiCuaca from "../../components/AtribusiCuaca";
import SearchBox from "../../components/SearchBox";
import WeatherCard from "../../components/WeatherCard";
import { labelKodeCuaca } from "../../constants/weatherCodes";
import { useDebounce } from "../../hooks/use-debounce";
import { ambilKualitasUdara } from "../../services/airQualityService";
import { cariKota } from "../../services/geocodingService";
<<<<<<< HEAD
import {
  ambilKoordinatSaatIni,
  mintaIzinLokasi,
} from "../../services/locationService";
=======
>>>>>>> 8537c32bf4424fc388a04a4a4821f5a83416610e
import { konversiTingkatAQI } from "../../services/weatherAdapter";
import { ambilCuaca } from "../../services/weatherService";
import { HasilGeocoding } from "../../types/geocoding";
import { DataCuacaLengkap, DataKualitasUdara } from "../../types/weather";
<<<<<<< HEAD

=======
>>>>>>> 8537c32bf4424fc388a04a4a4821f5a83416610e
export default function HalamanUtama() {
  const [teksCari, setTeksCari] = useState("");
  const [hasilPencarian, setHasilPencarian] = useState<HasilGeocoding[]>([]);
  const [kotaTerpilih, setKotaTerpilih] = useState<HasilGeocoding | null>(null);
  const [cuaca, setCuaca] = useState<DataCuacaLengkap | null>(null);
  const [kualitasUdara, setKualitasUdara] = useState<DataKualitasUdara | null>(
    null,
  );
  const [sedangMemuat, setSedangMemuat] = useState(false);
  const [pesanError, setPesanError] = useState<string | null>(null);
<<<<<<< HEAD
  const [pesanLokasi, setPesanLokasi] = useState<string | null>(null);

  const teksTertunda = useDebounce(teksCari, 500);
  const requestIdRef = useRef(0); // pencegah race condition

  
const [idFavorit, setIdFavorit] = useState<number[]>([]);

const muatIdFavorit = useCallback(async () => {
  try {
    const daftar = await ambilSemuaFavorit();
    setIdFavorit(daftar.map((kota) => kota.id));
  } catch {
    Alert.alert("Error", "Gagal memuat daftar favorit.");
  }
}, []);

useFocusEffect(
  useCallback(() => {
    void muatIdFavorit();
  }, [muatIdFavorit])
);

=======
  const teksTertunda = useDebounce(teksCari, 500);
  const requestIdRef = useRef(0); // pencegah race condition
>>>>>>> 8537c32bf4424fc388a04a4a4821f5a83416610e
  useEffect(() => {
    if (teksTertunda.trim().length === 0) {
      setHasilPencarian([]);
      return;
    }
    cariKota(teksTertunda)
      .then(setHasilPencarian)
      .catch(() => setHasilPencarian([]));
  }, [teksTertunda]);
<<<<<<< HEAD

=======
>>>>>>> 8537c32bf4424fc388a04a4a4821f5a83416610e
  async function pilihKota(kota: HasilGeocoding) {
    setKotaTerpilih(kota);
    const idSaatIni = ++requestIdRef.current;
    setSedangMemuat(true);
    setPesanError(null);
<<<<<<< HEAD

=======
>>>>>>> 8537c32bf4424fc388a04a4a4821f5a83416610e
    try {
      const [dataCuaca, dataAQI] = await Promise.all([
        ambilCuaca(kota.latitude, kota.longitude),
        ambilKualitasUdara(kota.latitude, kota.longitude),
      ]);
<<<<<<< HEAD

      if (idSaatIni !== requestIdRef.current) return; // hasil basi, abaikan

      setCuaca(dataCuaca);
=======
      if (idSaatIni !== requestIdRef.current) return; // hasil basi, abaikan
      setCuaca(dataCuaca);

>>>>>>> 8537c32bf4424fc388a04a4a4821f5a83416610e
      setKualitasUdara(dataAQI);
    } catch (err) {
      if (idSaatIni !== requestIdRef.current) return;
      setPesanError("Gagal memuat data cuaca. Periksa koneksi internet Anda.");
    } finally {
      if (idSaatIni === requestIdRef.current) setSedangMemuat(false);
    }
  }
<<<<<<< HEAD

  async function gunakanLokasiSaatIni() {
    const status = await mintaIzinLokasi();

    if (status === "denied") {
      setPesanLokasi(
        "Izin lokasi ditolak. Silakan cari kota secara manual di atas.",
      );
      return;
    }
    if (status === "unavailable") {
      setPesanLokasi(
        "Layanan lokasi tidak aktif di perangkat ini. Silakan cari kota secara manual.",
      );
      return;
    }

    setPesanLokasi(null);
    const koordinat = await ambilKoordinatSaatIni();
    pilihKota({
      id: -1,
      name: "Lokasi Saat Ini",
      latitude: koordinat.latitude,
      longitude: koordinat.longitude,
      country: "",
    });
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 16, gap: 16 }}>
      <SearchBox onCari={setTeksCari} />
      <Button title="Gunakan Lokasi Saat Ini" onPress={gunakanLokasiSaatIni} />
      {pesanLokasi && <Text>{pesanLokasi}</Text>}

=======
  return (
    <SafeAreaView style={{ flex: 1, padding: 16, gap: 16 }}>
      <SearchBox onCari={setTeksCari} />
>>>>>>> 8537c32bf4424fc388a04a4a4821f5a83416610e
      {hasilPencarian.map((kota) => (
        <TouchableOpacity key={kota.id} onPress={() => pilihKota(kota)}>
          <Text>{kota.name}</Text>
        </TouchableOpacity>
      ))}
<<<<<<< HEAD

      {sedangMemuat && <ActivityIndicator />}

=======
      {sedangMemuat && <ActivityIndicator />}
>>>>>>> 8537c32bf4424fc388a04a4a4821f5a83416610e
      {pesanError && (
        <View>
          <Text>{pesanError}</Text>
          <Button
            title="Coba Lagi"
            onPress={() => kotaTerpilih && pilihKota(kotaTerpilih)}
          />
        </View>
      )}
<<<<<<< HEAD

    
      {cuaca && kualitasUdara && kotaTerpilih && !sedangMemuat && (
        <>
          <WeatherCard
            kota={kotaTerpilih.name}
            suhu={cuaca.saatIni.suhu}
            tingkatAQI={konversiTingkatAQI(kualitasUdara.indeksAQI)}
          />
          
          {!idFavorit.includes(kotaTerpilih.id) && (
            <Button
              title="Tambahkan ke Favorit"
              onPress={() =>
                router.push({
                  pathname: "/tambah-favorit",
                  params: {
                    id: String(kotaTerpilih.id),
                    nama: kotaTerpilih.name,
                    lat: String(kotaTerpilih.latitude),
                    lon: String(kotaTerpilih.longitude),
                  },
                })
              }
            />
          )}
        </>
=======
      {cuaca && kualitasUdara && kotaTerpilih && !sedangMemuat && (
        <WeatherCard
          kota={kotaTerpilih.name}
          suhu={cuaca.saatIni.suhu}
          tingkatAQI={konversiTingkatAQI(kualitasUdara.indeksAQI)}
          indeksAQI={kualitasUdara.indeksAQI}
        />
>>>>>>> 8537c32bf4424fc388a04a4a4821f5a83416610e
      )}

      {cuaca && (
        <View>
          <Text style={{ fontSize: 14 }}>
            Suhu Maksimal Hari Ini: {cuaca.harian.suhuMaksimal[0]}°C
          </Text>
          <Text style={{ fontSize: 14 }}>
            Suhu Minimal Hari Ini: {cuaca.harian.suhuMinimal[0]}°C
          </Text>
        </View>
      )}

      {cuaca && (
        <Text style={{ fontSize: 12, color: "#888" }}>
          Kondisi: {labelKodeCuaca(cuaca.saatIni.kodeCuaca)} • Angin
          {cuaca.saatIni.kecepatanAngin} km/j
        </Text>
      )}
<<<<<<< HEAD
=======

>>>>>>> 8537c32bf4424fc388a04a4a4821f5a83416610e
      {cuaca && kualitasUdara && (
        <View>
          <Text style={{ fontSize: 12, color: "#888" }}>
            PM2.5: {kualitasUdara.pm25} µg/m³
          </Text>
          <Text style={{ fontSize: 12, color: "#888" }}>
            PM10: {kualitasUdara.pm10} µg/m³
          </Text>
        </View>
      )}
<<<<<<< HEAD
=======

      <AtribusiCuaca />
>>>>>>> 8537c32bf4424fc388a04a4a4821f5a83416610e
      <AtribusiCuaca />
    </SafeAreaView>
  );
}
<<<<<<< HEAD
=======
=======
// src/app/(tabs)/index.tsx 
import { useEffect, useState } from "react";
import { ActivityIndicator, Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SearchBox from "../../components/SearchBox";
import WeatherCard from "../../components/WeatherCard";
import { useDebounce } from "../../hooks/use-debounce";
import { cariKota } from "../../services/geocodingService";
import { HasilGeocoding } from "../../types/geocoding";

export default function HalamanUtama() {
  const [teksCari, setTeksCari] = useState("");
  const [hasil, setHasil] = useState<HasilGeocoding[]>([]);
  const [sedangMemuat, setSedangMemuat] = useState(false);
  const [pesanError, setPesanError] = useState<string | null>(null);

  const teksTertunda = useDebounce(teksCari, 500);

  useEffect(() => {
    if (teksTertunda.trim().length === 0) {
      setHasil([]);
      setPesanError(null);
      return;
    }
    ambilData(teksTertunda);
  }, [teksTertunda]);

  async function ambilData(nama: string) {
    setSedangMemuat(true);
    setPesanError(null);
    try {
      const data = await cariKota(nama);
      setHasil(data);
    } catch (err) {
      setPesanError("Gagal mengambil data. Periksa koneksi internet Anda.");
    } finally {
      setSedangMemuat(false);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 16, gap: 16 }}>
      <SearchBox onCari={setTeksCari} />

      {sedangMemuat && <ActivityIndicator />}

      {pesanError && (
        <View>
          <Text accessibilityLabel={pesanError}>{pesanError}</Text>
          <Button title="Coba Lagi" onPress={() => ambilData(teksTertunda)} />
        </View>
      )}

      {!sedangMemuat && !pesanError && teksTertunda.length > 0 && hasil.length === 0
        && (
          <Text accessibilityLabel="Kota tidak ditemukan">Kota tidak ditemukan</Text>
        )}

      {!sedangMemuat && !pesanError && hasil.length > 0 && (
         <Text accessibilityLabel="Ditemukan">Ditemukan {hasil.length} kota</Text>
      )}
        
      {hasil.map((kota) => (
        <WeatherCard key={kota.id} kota={kota.name} suhu={29} tingkatAQI="BAIK" />
      ))}
    </SafeAreaView>
  );
}
>>>>>>> e6d0380787c8f0df51f1fe1fcde67dc3409e6936
>>>>>>> 8537c32bf4424fc388a04a4a4821f5a83416610e
