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
            <ElButton class="login_button" type="primary">登陆</ElButton>
          </ElFormItem>
        </ElForm>
      </ElCol>
    </ElRow>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive } from 'vue'
const loginForm = reactive({
  username: 'admin',
  password: '123456',
})
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
