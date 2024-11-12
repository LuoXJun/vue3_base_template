import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';

export const plugins = [
    vue(),
    AutoImport({
        dts: 'src/types/autoImport/auto-import.d.ts',
        imports: ['vue', 'vue-router'],
        resolvers: [
            ElementPlusResolver(),
            IconsResolver({
                prefix: 'Icon'
            })
        ]
    }),
    Components({
        dirs: ['src/components'],
        dts: 'src/types/component/component.d.ts',
        resolvers: [
            ElementPlusResolver(),
            IconsResolver({
                enabledCollections: ['ep']
            })
        ]
    }),
    Icons({
        autoInstall: true
    })
];
