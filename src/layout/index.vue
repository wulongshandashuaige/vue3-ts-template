<template>
  <div>
    <div class="layout_container">
      <div class="layout_slider">
        <Logo></Logo>
        <el-scrollbar class="scrollbar">
          <el-menu background-color="$base-menu-background" text-color="white">
            <Menu :menuList="userStore.menuRoutes"></Menu>
          </el-menu>
        </el-scrollbar>
      </div>

      <div class="layout_tabbarr">2</div>
      <div class="layout_main">
        <p style="height: 10000px">123</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import useUserStore from '@/store/modules/user'
const userStore = useUserStore()
</script>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
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
    background-color: aquamarine;
    position: fixed;
    top: 0;
    left: $base-menu-width;
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
  }
}
</style>
