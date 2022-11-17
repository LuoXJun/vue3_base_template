<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
</script>

<style lang="scss">
// 可以注释，但是必须有任意样式，否则vite.config.js中的css不会生效
// @import url('@/styles/index.scss');
</style>
