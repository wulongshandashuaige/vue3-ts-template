<template>
  <div class="login_container">
    <ElRow>
      <ElCol :span="12" xs="0"></ElCol>
      <ElCol :span="12" xs="24" class="elcol">
        <ElForm class="login_form">
          <h1>HELLO</h1>
          <h2>商品后台</h2>
          <ElFormItem>
            <ElInput
              :prefix-icon="User"
              type="text"
              placeholder="请输入用户名"
              v-model="loginForm.username"
            ></ElInput>
          </ElFormItem>
          <ElFormItem>
            <ElInput
              :prefix-icon="Lock"
              type="password"
              placeholder="请输入密码"
              v-model="loginForm.password"
              show-password
            ></ElInput>
          </ElFormItem>
          <ElFormItem>
            <ElButton
              class="login_button"
              type="primary"
              @click="userLogin()"
              :loading="loading"
            >
              登陆
            </ElButton>
          </ElFormItem>
        </ElForm>
      </ElCol>
    </ElRow>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import useUserStore from '@/store/modules/user'
import { loginForm } from '@/api/user/type'
import { ElNotification } from 'element-plus'
const useStore = useUserStore()
const loginForm = reactive({
  username: 'admin',
  password: '111111',
})
const loading = ref(false)
const $router = useRouter()
const userLogin = async () => {
  loading.value = true
  try {
    let res = await useStore.userLogin(loginForm)
    $router.push('/')
    ElNotification({
      type: 'success',
      message: res,
    })
  } catch (error) {
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  } finally {
    loading.value = false
  }
}
</script>

<style lang="scss" scoped>
.login_container {
  background: url('@/assets/images/background.jpg') no-repeat;
  height: 100vh;
  width: 100%;
  background-size: cover;
  .login_form {
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    position: relative;
    width: 80%;
    top: 29vh;
    padding: 30px;
    h1 {
      font-size: 60px;
      color: white;
    }
    h2 {
      font-size: 30px;
      color: white;
      margin: 20px 0;
    }
    .login_button {
      width: 100%;
    }
  }
}
</style>
