import { Image, View } from "react-native";

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
        resizeMode="center"
        source={require("./assets/LearnLogo.png")}
      />
    </View>
  );
}
