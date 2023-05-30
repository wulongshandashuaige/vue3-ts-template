<template>
  <div>
    <SvgIcon name="lock" color="yellow" height="20px" width="20px"></SvgIcon>
    <svg-icon name="lock"></svg-icon>
    <navigator></navigator>
    <div class="outer">哈哈哈</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import request from '@/utils/request.ts'
onMounted(() => {
  request({
    url: '/user/login1',
    method: 'post',
    data: {
      username: 'admin',
      password: '111111',
    },
  }).then((v) => console.log(v))
})
</script>

<style lang="scss" scoped>
.outer {
  color: $color;
}
</style>
