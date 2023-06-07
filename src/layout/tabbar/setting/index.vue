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
  <img
    src="../../../assets/images/logo.png"
    style="width: 24px; height: 24px; margin-left: 10px"
  />

  <!-- 下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      admin
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import useSettingStore from '@/store/modules/setting'

const settingStore = useSettingStore()

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
</script>
<script lang="ts">
export default {
  name: 'Setting',
}
</script>
<style lang="css" scoped></style>
