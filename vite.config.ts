import { UserConfigExport, defineConfig, loadEnv } from 'vite';
import { plugins } from './vite.plugins';
import { buildConfig } from './vite.build.config';
import path from 'path';

const baseConfig: UserConfigExport = {
    plugins,
    base: './',
    define: {
        'process.env': {}
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use '@/styles/globalScss.scss' as *;`
            }
        }
    },
    server: {
        host: true,
        port: 3005,
        hmr: true,
        // open: '/index.html',
        proxy: {
            '^/dev': {
                target: 'http://192.168.3.65:8808',
                secure: false,
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/dev/, '')
            }
        }
    }
};

const viteConfig = {
    serve: () => baseConfig,
    build: () => ({ ...baseConfig, ...buildConfig })
};

export default defineConfig(({ command, mode }) => {
    // 根据当前工作目录中的 `mode` 加载 .env 文件
    // 默认前缀为VITE_,通过设置第三个参数改变默认前缀,空值则加载全部（此处的前缀只影响当前函数加载的环境变量，使用import.meta.env获取时仍然是默认VITE_开头，可通过envPrefix修改）
    // 因为在当前配置文件中获取不到import.meta.env，所以通过该函数获取环境变量，在非配置文件中仍然使用import.meta.env
    const env = loadEnv(mode, process.cwd(), 'LJ_');
    console.log(env);

    return viteConfig[command]();
});
