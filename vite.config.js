import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/goit-react-hw-03-phonebook/',
    plugins: [react()],
    resolve: {
        alias: {
            '~': '/src/',
            components: '/src/components',
            API: '/src/API',
            helpers: '/src/helpers',
        },
    },
});
