import { Platform } from "react-native";

function getImageUrl(path: string) {
  //@ts-ignore
  return new URL(path, import.meta.url).href
}

function resolveImage(path: string) {
  return Platform.OS === "web" ? getImageUrl(path) : require(path);
}

export const IMAGES = {
  "logo": resolveImage('./assets/learn-logo.png')
}
