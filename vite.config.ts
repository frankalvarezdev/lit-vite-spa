import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: 'index.html',
            formats: ['es'],
            fileName: '[name].[hash]'
        }
    },
    plugins: [
        tsconfigPaths()
    ]
});