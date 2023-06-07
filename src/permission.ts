//路由鉴权
import router from '@/router'
//进度条
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import pinia from './store'
import useUserStore from './store/modules/user'
import setting from '@/setting.ts'
//不要转圈
nprogress.configure({ showSpinner: false })
import { ElNotification } from 'element-plus'
const userStore = useUserStore(pinia)
//路由前置守卫
//全部路由组件:登录|404|任意路由|首页|数据大屏|权限管理(三个子路由)|商品管理(四个子路由)
//用户未登录:可以访问login,其余六个路由不能访问(指向login)
//用户登录成功:不可以访问login[指向首页],其余的路由可以访问
router.beforeEach(async (to, from, next) => {
  nprogress.start()
  let token = userStore.token
  if (token) {
    if (to.path !== '/login') {
      if (userStore.username) {
        next()
        document.title = `${setting.title}-` + to.meta.title
      } else {
        try {
          await userStore.getUserInfo()
          next()
          document.title = `${setting.title}-` + to.meta.title
        } catch (error) {
          //token过期或被主动修改
          userStore.userLogout()
          next({ path: '/login', query: { redirect: to.path } })
        }
      }
    } else {
      next({ path: from.path })
    }
  } else {
    if (to.path !== '/login') {
      next({ path: '/login' })
      document.title = `${setting.title}-` + to.meta.title
    } else {
      next()
      document.title = `${setting.title}-` + to.meta.title
    }
  }
})
//路由后置守卫
router.afterEach((to, from) => {
  nprogress.done()
})
