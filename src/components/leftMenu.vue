<!-- 在当前组件递归渲染数据 -->
<template>
    <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        mode="vertical"
        router
        :collapse="isCollapse"
        unique-opened
        background-color="rgba(8, 90, 148, 1)"
        active-text-color="#000"
        text-color="#fff"
    >
        <template v-if="title">
            <p v-if="!isCollapse" class="menu-title" @click="$router.push('/')">{{ title }}</p>
            <p v-else class="menu-title-img">
                <img src="../assets/logo.png" />
            </p>
        </template>
        <LeftMenuComponent :list="store.getRoutes(store.menu)" :parent-path="parentPath" />
    </el-menu>
</template>

<script setup lang="ts">
import { useMenuStore } from '@/store/useMenu';

defineProps({
    isCollapse: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: ''
    }
});

const store = useMenuStore();

const parentPath = '/';
</script>

<style lang="scss">
.el-menu {
    min-height: 100%;
    .menu-title {
        color: #fff;
        font-size: 20px;
        text-align: center;
        padding: 20px 0;
        font-weight: bold;
        box-sizing: border-box;
        cursor: pointer;
    }
    .menu-title-img {
        text-align: center;
        padding-top: 20px;
        > img {
            width: 20px;
        }
    }
    .el-menu-item.is-active {
        background-color: rgba(226, 240, 251, 1);
    }
}
</style>
