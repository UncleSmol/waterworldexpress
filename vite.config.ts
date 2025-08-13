import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Add the specific host to the allowedHosts array
    allowedHosts: ["cz5cq5-5173.csb.app"],
  },
});
