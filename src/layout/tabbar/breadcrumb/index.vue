<template>
  <!-- 控制伸缩按钮 -->
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <component :is="settingStore.fold ? 'Fold' : 'Expand'"></component>
  </el-icon>

  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="(item, index) in $route.matched"
      :key="item.path"
      v-show="item.meta.title"
      :to="item.path"
    >
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import useSettingStore from '@/store/modules/setting'
const $route = useRoute()
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
