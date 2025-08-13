import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Add the specific host to the allowedHosts array
    allowedHosts: ["f3m9v5-5173.csb.app"],
  },
});
