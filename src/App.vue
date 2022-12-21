<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import { useMenuStore } from '@/store/useMenu';
const store = useMenuStore();

window.addEventListener('beforeunload', function () {
  sessionStorage.setItem('state', JSON.stringify(store.$state));
});

window.addEventListener('load', function () {
  sessionStorage.removeItem('state');
});
</script>

<style lang="scss">
// @import url('@/styles/index.scss');
</style>
