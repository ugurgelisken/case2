import { defineConfig } from 'vite';
const { resolve } = require('path');
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {},
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
});
