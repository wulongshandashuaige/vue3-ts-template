//统一管理用户相关接口
import request from '@/utils/request'
import type { loginForm, loginResponseData, userInfoReponseData } from './type'
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

//登陆接口
export const reqLogin = (data: loginForm) => {
  return request.post<any, loginResponseData>(API.LOGIN_URL, data)
}
//获取用户信息接口
export const reqUserInfo = () => {
  return request.get<any, userInfoReponseData>(API.USERINFO_URL)
}
