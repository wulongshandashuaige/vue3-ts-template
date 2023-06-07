//路由鉴权
import router from '@/router'
//进度条
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
//路由前置守卫
router.beforeEach((to, from, next) => {
  nprogress.start()
  next()
})
//路由后置守卫
router.afterEach((to, from) => {
  nprogress.done()
})
