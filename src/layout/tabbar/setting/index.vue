<template>
  <el-button
    size="default"
    icon="Refresh"
    circle
    @click="updateRefresh"
  ></el-button>
  <el-button
    size="default"
    icon="FullScreen"
    circle
    @click="fullScreen"
  ></el-button>
  <el-button size="default" icon="Setting" circle></el-button>
  <img :src="userStore.avatar" />

  <!-- 下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ userStore.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import useSettingStore from '@/store/modules/setting'
import useUserStore from '@/store/modules/user'
import { useRouter, useRoute } from 'vue-router'
const settingStore = useSettingStore()
const userStore = useUserStore()
const $router = useRouter()
const $route = useRoute()
//刷新按钮点击回调
const updateRefresh = () => {
  settingStore.refsh = !settingStore.refsh
}
//全屏按钮点击回调
const fullScreen = () => {
  let full = document.fullscreenElement
  if (!full) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}
//退出按钮回调
const logout = () => {
  userStore.userLogout()
  $router.push({
    path: '/login',
    query: { redirect: $route.path },
  })
}
</script>
<script lang="ts">
export default {
  name: 'Setting',
}
</script>
<style lang="scss" scoped>
img {
  width: 32px;
  height: 32px;
  margin: 0 10px;
  border-radius: 50%;
}
</style>
