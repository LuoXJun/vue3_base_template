<template>
    <el-config-provider :locale="zhCn">
        <el-button></el-button>
        <router-view></router-view>
    </el-config-provider>
    <me-button></me-button>
</template>

<script setup lang="ts">
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';

console.log(import.meta.env);
</script>
