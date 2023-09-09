import { View, Image, TextInput, Text } from "react-native";
import { IMAGES } from "./assets";

export function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Image
        style={{
          flex: 1,
          width: 200,
          height: 200
        }}
        resizeMode="contain"
        source={IMAGES.logo}
      />
    </View>
  );
}
