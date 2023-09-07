// vite.config.ts
import react from "@vitejs/plugin-react";
import * as path from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { InlineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    dts({
      entryRoot: path.resolve(__dirname, "./src"),
    }),
  ],
  build: {
    outDir: path.resolve(__dirname, "dist"),
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      name: "ui",
      fileName: (format, entryName) => `${entryName}-${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [
        "react",
        "react/jsx-runtime",
        "react-dom",
        "react-native",
        "react/jsx-runtime",
      ],
      output: {
        globals: {
          react: "React",
          "react/jsx-runtime": "jsxRuntime",
          "react-native": "ReactNative",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
}) satisfies InlineConfig;

