<template>
  <div>
    <svg :style="{ height, width }">
      <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps({
  //前缀
  prefix: {
    type: String,
    default: '#icon-',
  },
  //父组件传递的图标名称
  name: String,
  //父组件传递的图标颜色
  color: {
    type: String,
    default: '',
  },
  //父组件传递的图标高度
  height: {
    type: String,
    default: '16px',
  },
  //父组件传递的图标宽度
  width: {
    type: String,
    default: '16px',
  },
})
</script>

<style lang="css" scoped></style>
