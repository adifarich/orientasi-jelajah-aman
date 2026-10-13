// src/services/airQualityService.ts
import { DataKualitasUdara } from "../types/weather";
<<<<<<< HEAD

const BASE_URL = "https://air-quality-api.open-meteo.com/v1/air-quality";

=======
const BASE_URL = "https://air-quality-api.open-meteo.com/v1/air-quality";
>>>>>>> 8537c32bf4424fc388a04a4a4821f5a83416610e
export async function ambilKualitasUdara(
  latitude: number,
  longitude: number,
): Promise<DataKualitasUdara> {
  const url = `${BASE_URL}?latitude=${latitude}&longitude=${longitude}&current=european_aqi,pm2_5,
pm10`;
<<<<<<< HEAD

=======
>>>>>>> 8537c32bf4424fc388a04a4a4821f5a83416610e
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Gagal memuat kualitas udara (status ${response.status})`);
  }
<<<<<<< HEAD

=======
>>>>>>> 8537c32bf4424fc388a04a4a4821f5a83416610e
  const data = await response.json();
  return {
    indeksAQI: data.current.european_aqi,
    pm25: data.current.pm2_5,
    pm10: data.current.pm10,
  };
}
