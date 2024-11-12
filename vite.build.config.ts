import { UserConfigExport } from 'vite';
import * as path from 'path';
export const buildConfig: UserConfigExport = {
    build: {
        rollupOptions: {
            input: {
                index: path.resolve(__dirname, 'index.html')
            },
            output: {
                chunkFileNames: 'static/js/[name]-[hash].js',
                entryFileNames: 'static/js/[name]-[hash].js',
                assetFileNames: 'static/[ext]/name-[hash].[ext]',
                manualChunks: {
                    vue: ['vue', 'vue-router', 'pinia', 'axios'],
                    lodash: ['lodash']
                }
            }
        }
        // sourcemap:true
    },
    esbuild: {
        drop: ['debugger', 'console']
    }
};
