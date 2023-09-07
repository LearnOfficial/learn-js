import { View, Image } from "react-native";

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
          width: 250,
          height: 250
        }}
        resizeMode="contain"
        source={{
        uri: "https://github.com/LearnOfficial/learn/blob/main/packages/ui/public/assets/LearnLogo.png?raw=true"
      }}
      />
    </View>
  );
}
