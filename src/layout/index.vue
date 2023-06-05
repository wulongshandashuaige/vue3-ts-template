<template>
  <div>
    <div class="layout_container">
      <div class="layout_slider">1</div>
      <div class="layout_tabbarr">2</div>
      <div class="layout_main">
        <p style="height: 10000px">123</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import logo from './logo/index.vue'
</script>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
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
