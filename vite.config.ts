import path from "path";
import react from "@vitejs/plugin-react";
import eslint from 'vite-plugin-eslint';
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: '0.0.0.0', // Set your desired port here
    strictPort: true, // Fails if the port is already in use
  },
});

