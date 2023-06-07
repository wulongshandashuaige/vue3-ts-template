import { defineStore } from 'pinia'
import { reqLogin, reqUserInfo } from '@/api/user'
import type {
  loginForm,
  loginResponseData,
  userInfoReponseData,
} from '@/api/user/type'
import { GET_TOKEN, REMOVE_TOKEN, SET_TOKEN } from '@/utils/token'
import type { UserState } from './types/type'
import { constRoute } from '@/router/routes'
const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constRoute,
      username: '',
      avatar: '',
    }
  },
  actions: {
    async userLogin(data: loginForm) {
      let res: loginResponseData = await reqLogin(data)
      if (res.code === 200) {
        this.token = res.data.token as string
        SET_TOKEN(res.data.token as string)
        return 'ok'
      } else {
        return Promise.reject(new Error(res.data.message))
      }
    },
    async getUserInfo() {
      let res: userInfoReponseData = await reqUserInfo()
      if (res.code === 200) {
        console.log(res)
        this.username = res.data.checkUser.username
        this.avatar = res.data.checkUser.avatar
      }
    },
    userLogout() {
      this.username = ''
      this.avatar = ''
      this.token = ''
      REMOVE_TOKEN()
    },
  },
  getters: {},
})

export default useUserStore
