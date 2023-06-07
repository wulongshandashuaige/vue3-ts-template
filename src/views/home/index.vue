<template>
  <div>{{ userStore.username }}</div>
</template>

<script setup lang="ts">
import useUserStore from '@/store/modules/user'
import { onMounted } from 'vue'
const userStore = useUserStore()
onMounted(() => {
  userStore.getUserInfo()
})
</script>
<script lang="ts">
export default {
  name: 'Home',
}
</script>
<style lang="css" scoped></style>
