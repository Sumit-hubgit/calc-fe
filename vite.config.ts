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
    host: '0.0.0.0', // Listen on all interfaces
    port: 3000, // Use a number for the port
    strictPort: true, // Fail if the port is already in use
  },
});

