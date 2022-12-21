<template>
  <div>
    <div>
      B
      <el-button @click="add">添加菜单</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMenuStore } from '@/store/useMenu';
import { routeConfig } from '@/router/config/routes1';
const store = useMenuStore();
const add = () => {
  store.$state.menu = routeConfig;
};
</script>

<style scoped></style>
