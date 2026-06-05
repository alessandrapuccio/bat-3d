import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  resolve: {
    alias: {
      'react': 'https://esm.sh/react',
      'react-dom': 'https://esm.sh/react-dom',
      'three': 'https://esm.sh/three',
    },
  },
  build: {
    lib: {
      entry: 'src/index.jsx',
      name: 'BatApp',
      formats: ['es'],
      fileName: (format) => `batapp.${format}.js`,
    },
    rollupOptions: {
      external: [],
    },
  },
});
