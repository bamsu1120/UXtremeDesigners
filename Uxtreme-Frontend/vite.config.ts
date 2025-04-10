<<<<<<< Updated upstream
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
=======
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
>>>>>>> Stashed changes

export default defineConfig({
<<<<<<< Updated upstream
  plugins: [
    react(),
    tailwindcss(),
  ],
})
=======
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
});
>>>>>>> Stashed changes
