// src/components/AtribusiCuaca.tsx
import { Linking, Text, TouchableOpacity } from "react-native";
<<<<<<< HEAD

=======
>>>>>>> 8537c32bf4424fc388a04a4a4821f5a83416610e
export default function AtribusiCuaca() {
  return (
    <TouchableOpacity
      onPress={() => Linking.openURL("https://open-meteo.com/")}
    >
      <Text style={{ fontSize: 11, color: "#888", textAlign: "center" }}>
        Data cuaca disediakan oleh Open-Meteo.com
      </Text>
    </TouchableOpacity>
  );
}
