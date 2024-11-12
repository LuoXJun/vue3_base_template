import '@vue/runtime-core';

export {};

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        MeButton: typeof import('./../engine-ui/components/MeButton.vue')['default'];
    }
}
