import { defineStore } from 'pinia';
import { RouteRecordRaw, RouterView } from 'vue-router';
import Layout from '@/views/layout.vue';
import router from '@/router';
const views = import.meta.glob('@/views/pages/**/index.vue');
const Null = import.meta.glob('@/views/Null.vue');

interface UseMenu {
    menu: RouteOptions[];
    query: Record<string, any>;
    isNeedUpdate: boolean;
    isCollapse: boolean;
}

/**
 * 必须初始化，否则使用$patch改变值后，不能监听到值的变化
 * */
const state =
    <UseMenu>JSON.parse(sessionStorage.getItem('state') as string) ||
    <UseMenu>{ menu: [], query: {}, isNeedUpdate: true, isCollapse: false };

// 页面刷新时重新注册路由
state.isNeedUpdate = true;

export const useMenuStore = defineStore('menu', {
    state: () => {
        return state;
    },
    actions: {
        /**
         * 菜单渲染情况
         * 1、作为菜单组渲染  type==menu
         * 2、作为菜单按钮渲染  type==link
         * 3、作为菜单按钮级别页面的子页面
         *
         */
        getRoutes(menus: RouteOptions[]) {
            const routes: RouteRecordRaw[] = [];
            for (const menu of menus) {
                const obj: RouteRecordRaw = {
                    path: menu.path,
                    name: menu.name,
                    redirect: menu.redirect ?? '',
                    component:
                        menu.type == 'menu'
                            ? RouterView
                            : views[`/src/views/pages/${menu.component}/index.vue`] ||
                              Null[`/src/views/Null.vue`],
                    meta: {
                        icon: menu.icon,
                        title: menu.title,
                        type: menu.type,
                        isHidden: menu.isHidden || false,
                        component: menu.component
                    },
                    children: []
                };

                if (menu.children && menu.children.length > 0) {
                    obj.children.push(...this.getRoutes(menu.children));
                }
                routes.push(obj);
            }
            return routes;
        },
        setRoute(routes: RouteRecordRaw[]) {
            const layout: RouteRecordRaw = {
                path: '/',
                name: 'layout',
                component: Layout,
                children: []
            };
            routes.forEach((route) => {
                layout.children.push(route);
            });
            router.addRoute(layout);
        }
    }
});
