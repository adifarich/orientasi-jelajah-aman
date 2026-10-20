<<<<<<< HEAD
// src/app/_layout.tsx (root layout)
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { TemaProvider, useTema } from "../context/TemaContext";

function StackBertema() {
  const { warna, skema } = useTema();
  return (
    <>
      <StatusBar style={skema === "gelap" ? "light" : "dark"} />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: warna.latar },
          headerTintColor: warna.teks,
          contentStyle: { backgroundColor: warna.latar },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="detail/[kota]" options={{ title: "Detail Cuaca" }} />
        <Stack.Screen
          name="tambah-favorit"
          options={{ presentation: "modal", title: "Tambah Favorit" }}
        />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  return (
    <TemaProvider>
      <StackBertema />
    </TemaProvider>
  );
}
=======
// app/_layout.tsx (root layout) 
import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="detail/[kota]" options={{ title: "Detail Cuaca" }} />
            <Stack.Screen
                name="tambah-favorit"
                options={{ presentation: "modal", title: "Tambah Favorit" }}
            />
        </Stack>
    );
}
>>>>>>> d0e104160e8fe0dd197f30fd23868c53ec8303ea
