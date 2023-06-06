<template>
  <div class="container" v-if="setting.logoHidden">
    <img :src="setting.logo" alt="" />
    <span>{{ setting.title }}</span>
  </div>
</template>

<script setup lang="ts">
import setting from '../../setting'
</script>
<script lang="ts">
export default {
  name: 'Logo',
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  color: white;
  padding: 20px;
  font-size: $base-logo-title-fontSize;
  img {
    height: $base-menu-logo-height;
    margin-right: 10px;
  }
}
</style>
