//定义接口数据类型

export interface loginForm {
  username: string
  password: string
}

interface dataType {
  token?: string
  message?: string
}
export interface loginResponseData {
  code: number
  data: dataType
}

interface userInfoData {
  checkUser: any
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: []
  buttons: []
  routes: []
  token: string
}
export interface userInfoReponseData {
  code: number
  data: userInfoData
}
