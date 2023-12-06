<template>
    <div class="common-layout templateClass">
        <el-container>
            <el-aside class="menu-aside">
                <leftMenu title="template" :is-collapse="store.isCollapse" />
            </el-aside>
            <el-container>
                <el-header style="height: auto">
                    <el-row align="middle">
                        <img
                            src="../assets/imgs/notFound.jpeg"
                            style="width: 20px; padding-right: 10px"
                            @click="
                                store.$patch((state) => {
                                    state.isCollapse = !state.isCollapse;
                                })
                            "
                        />
                        <headerNav></headerNav>
                    </el-row>
                </el-header>
                <el-main style="background-color: #e4e7ed">
                    <el-card shadow="hover">
                        <router-view />
                    </el-card>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import leftMenu from '@/components/leftMenu.vue';
import headerNav from '@/components/headerNav.vue';
import { useMenuStore } from '@/store/useMenu';
const store = useMenuStore();

const minWidth = computed(() => {
    return store.isCollapse ? '0px' : '200px';
});
</script>

<style lang="scss">
.templateClass {
    height: 100%;
    .el-container {
        height: 100%;
        .menu-aside {
            width: fit-content;
            min-width: v-bind(minWidth);
        }
    }
}
</style>
