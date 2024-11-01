import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Yoga-Stickers/', // Add this line
  plugins: [react()],
});
