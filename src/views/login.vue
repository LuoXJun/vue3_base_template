<template>
  <div>
    <el-button @click="login">登录</el-button>
    <el-button @click="print">打印</el-button>
  </div>
</template>

<script setup lang="ts">
import { useMenuStore } from '@/store/userStore'
import { routeConfig } from '@/router/config/routes'
import { loginApi } from '@/api/login/login'
const store = useMenuStore()
const router = useRouter()

const print = () => {
  console.log(132)
}
const login = async () => {
  await loginApi({})
  store.$state.menu = routeConfig
  sessionStorage.setItem('token', '123')
  router.push('/')
}
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  width: 100vw;
  background-image: url('@/assets/logo.png');
}
</style>
