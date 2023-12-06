<template>
    <div>
        <div @click="goPath">detail（click me reback）</div>
        <div>{{ $route.query }}</div>
        <el-button @click="$router.push({ path: '/A/A-a/detail/detailChild' })">
            进入下一级
        </el-button>
    </div>
</template>

<script setup lang="ts">
const router = useRouter();

const goPath = () => {
    router.push({
        path: '/A/A-a'
    });
};
</script>

<style scoped></style>
