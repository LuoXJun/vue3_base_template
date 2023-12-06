import {
    createRouter,
    createWebHashHistory,
    RouteLocationNormalized,
    RouterView
} from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { useMenuStore } from '@/store/useMenu';
import { stringifyQuery, parseQuery } from './encodeQuery';

const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录'
        },
        component: () => import('@/views/login.vue')
    },
    {
        path: '/:pathMatch(.*)',
        name: '404',
        component: () => import('@/views/notFound.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 };
    },
    // query传参加密
    stringifyQuery,
    parseQuery
});

// 消除父子路由同级
const setRouteView = (to: RouteLocationNormalized) => {
    to.matched.forEach((item, index) => {
        if (item.meta.type && item.meta.type !== 'menu' && index != to.matched.length - 1) {
            if (item.components && item.components.default) {
                item.components.default = RouterView;
                item.meta.isRouterView = true;
            }
        }
    });
};

router.beforeEach((to, _, next) => {
    const store = useMenuStore();
    const token = sessionStorage.getItem('token');

    if (!token) return to.path !== '/login' ? next('/login') : next();

    setRouteView(to);

    if (to.path === '/login') {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('state');
        return next();
    }

    /**
     * 页面刷新时重新注册路由
     * 通过重新注册路由重置被设置为routerview的父级路由
     * */
    if (store.isNeedUpdate || to.meta.isRouterView) {
        to.meta.isRouterView = false;

        store.setRoute(store.getRoutes(store.menu));
        store.$patch((state) => {
            state.isNeedUpdate = false;
        });
        return next(to.fullPath);
    }
    return next();
});

export default router;
