<template>
  <!-- 控制伸缩按钮 -->
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <component :is="settingStore.fold ? 'Fold' : 'Expand'"></component>
  </el-icon>

  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item>xxx</el-breadcrumb-item>
    <el-breadcrumb-item>xxx</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import useSettingStore from '@/store/modules/setting'
const changeIcon = () => {
  settingStore.fold = !settingStore.fold
}
const settingStore = useSettingStore()
</script>
<script lang="ts">
export default {
  name: 'Breaderumb',
}
</script>
<style lang="css" scoped></style>
