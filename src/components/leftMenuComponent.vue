<!-- 在当前组件递归渲染数据 -->
<template>
  <template v-for="item in list" :key="item">
    <!-- 含有子级 -->
    <el-sub-menu
      v-if="item.meta?.type == 'menu' && !item.meta?.isHidden"
      :index="parentPath + item.path"
    >
      <template #title>
        <el-icon>
          <component :is="getComponent(item.meta?.icon as string)" />
        </el-icon>
        <span style="padding-left: 10px; box-sizing: border-box">
          {{ item.meta?.title as string }}
        </span>
      </template>
      <leftMenuComponent
        :list="item.children"
        :parent-path="parentPath + item.path + '/'"
      ></leftMenuComponent>
    </el-sub-menu>
    <!-- 不含子级 -->
    <el-menu-item
      v-if="item.meta?.type == 'link' && !item.meta?.isHidden"
      :index="parentPath + item.path"
    >
      <el-icon>
        <component :is="getComponent(item.meta?.icon as string)" />
      </el-icon>
      <span style="padding-left: 10px; box-sizing: border-box">
        {{ item.meta?.title }}
      </span>
    </el-menu-item>
  </template>
</template>
<script setup lang="ts">
import * as icons from '@element-plus/icons-vue'
import { PropType } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
// 不想再路由中将路径写成/a/b/c的形式，需要在递归时带上父级路径
defineProps({
  list: {
    type: Object as PropType<RouteRecordRaw[]>,
    default: null
  },
  parentPath: {
    type: String,
    default: null
  }
})

// 获取当前注册的组件
const getComponent = (value: string) => {
  for (const key in icons) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (key == value) return icons[key]
  }
}
</script>
