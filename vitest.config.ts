import { defineConfig } from 'vitest/config';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  test:{
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./setupVitest.ts'],
    testTransformMode: { web: ["/\.[jt]sx?$/"] },
  }
});
