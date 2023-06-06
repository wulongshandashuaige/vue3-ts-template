<template>
  <div>
    <div class="layout_container">
      <!-- 侧边栏 -->
      <div
        class="layout_slider"
        :class="{ fold: settingStore.fold ? true : false }"
      >
        <Logo></Logo>
        <el-scrollbar class="scrollbar">
          <el-menu
            router
            :default-active="$route.path"
            :collapse="settingStore.fold"
            background-color="#001529"
            text-color="white"
            active-text-color="yellowgreen"
          >
            <Menu :menuList="userStore.menuRoutes"></Menu>
          </el-menu>
        </el-scrollbar>
      </div>
      <!--  顶部导航-->
      <div
        class="layout_tabbarr"
        :class="{ fold: settingStore.fold ? true : false }"
      >
        <Tabbar></Tabbar>
      </div>
      <!--内容展示区 -->
      <div
        class="layout_main"
        :class="{ fold: settingStore.fold ? true : false }"
      >
        <Main></Main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Main from './main/index.vue'
import Tabbar from './tabbar/index.vue'
import useUserStore from '@/store/modules/user'
import { useRoute } from 'vue-router'
import useSettingStore from '@/store/modules/setting'
const settingStore = useSettingStore()
const userStore = useUserStore()
const $route = useRoute()
</script>
<script lang="ts">
export default {
  name: 'Layout',
}
</script>
<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;
  // 高度不够字不换行
  white-space: nowrap;
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
    transition: all 0.3s;
    &.fold {
      width: $base-menu-min-width;
    }
    .scrollbar {
      height: calc(100vh - $base-menu-logo-height - 40px);
      width: 100%;
      .el-menu {
        border-right: none;
      }
    }
  }

  .layout_tabbarr {
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    position: fixed;
    top: 0;
    left: $base-menu-width;
    transition: all 0.3s;
    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
  .layout_main {
    width: calc(100% - $base-menu-width);
    background-color: green;
    height: calc(100vh - $base-tabbar-height);
    position: absolute;
    top: $base-tabbar-height;
    left: $base-menu-width;
    overflow: auto;
    padding: 20px;
    transition: all 0.3s;
    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
